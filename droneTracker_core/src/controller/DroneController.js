const Drone = require('../models/DroneModel');

const getDrones = async (req, res) => {
  try {
    const data = await Drone.find();
    res.json(data);
  } catch (error) {
    console.error('Error reading data from MongoDB:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
    getDrones,
};
