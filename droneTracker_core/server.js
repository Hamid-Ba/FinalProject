const express = require('express');
const cors = require('cors');
const connectToDatabase = require('./src/db');
const Drone = require('./src/models/DroneModel');
const mqtt = require('mqtt');
const bodyParser = require('body-parser');


const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const mqttBroker = mqtt.connect('mqtt://localhost:1883');


// Handle incoming drone data
mqttBroker.on('message', (topic, message) => {
  if (topic === 'drone-data-topic') {
    try {
      const dataString = message.toString('utf8');
      console.log('Received data:', dataString);

      const [droneId, latitude, longitude, load, speed, batteryPercentage] = dataString.split(',');

      if (droneId && latitude && longitude && load && speed && batteryPercentage) {
        const droneData = {
          droneId: droneId.trim(),
          latitude: parseFloat(latitude),
          longitude: parseFloat(longitude),
          load: load.trim(),
          speed: speed.trim(),
          batteryPercentage: batteryPercentage.trim(),
        };

        // Update or create drone data in the database
        Drone.findOneAndUpdate({ droneId: droneData.droneId }, droneData, { upsert: true })
          .then(() => {
            console.log(`Data saved/updated for drone with ID ${droneData.droneId}`);
          })
          .catch((error) => {
            console.error('Error saving/updating drone data:', error);
          });
      } else {
        console.warn('Skipping invalid data:', dataString);
      }
    } catch (error) {
      console.error('Error processing data from MQTT:', error);
    }
  }
});


mqttBroker.on('connect', () => {
  console.log('Connected to MQTT broker');
  mqttBroker.subscribe('drone-data-topic');
});


connectToDatabase().then(() => {
  // Define route to get drone data
  app.get('/api/drones', async (req, res) => {
    try {
      // Fetch drone data from the database and send it as the response
      const drones = await Drone.find();
      res.json(drones);
    } catch (error) {
      console.error('Error reading data from MongoDB:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
