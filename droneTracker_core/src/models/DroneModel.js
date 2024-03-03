const mongoose = require('mongoose');

const droneSchema = new mongoose.Schema({
  droneId:Number,
  latitude: Number,
  longitude: Number,
  load: String,
  speed:String,
  batteryPercentage: String
});

const Drone = mongoose.model('Drone', droneSchema);

module.exports = Drone;
