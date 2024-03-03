const express = require('express');
const router = express.Router();
const droneController = require('../controller/DroneController');


router.get('/api/drones', droneController.getDrones);

module.exports = router;
