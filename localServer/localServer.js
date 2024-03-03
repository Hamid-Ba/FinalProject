const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mqtt = require('mqtt');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const mqttBroker = mqtt.connect('mqtt://localhost:1883');

mqttBroker.on('connect', () => {
  console.log('Connected to MQTT broker');
});

mqttBroker.on('error', (error) => {
  console.error('MQTT connection error:', error);
});

setInterval(() => {
  const droneId = Math.floor(Math.random() * 1000) + 1;
  const latitude = 31.16;
  const longitude = 48.13;
  const load = Math.random() * 50;
  const speed = Math.random() * 50;
  const batteryPercentage = Math.random() * 100;

  const droneData = `${droneId},${latitude},${longitude},${load},${speed},${batteryPercentage}`;
  mqttBroker.publish('drone-data-topic', droneData);
}, 60000); 


app.post('/api/send-message', (req, res) => {
  const { droneId, message } = req.body;
  console.log(`Received message from Drone ID ${droneId}: ${message}`);
  res.json({ status: 'Message received successfully' });
});


const port = 5001;
app.listen(port, () => {
  console.log(`Server 2 is running on port ${port}`);
});