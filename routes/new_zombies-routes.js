const express = require('express');

const zombiesController = require('../controllers/zombies-controller');

const router = express.Router();

router.get('/add', zombiesController.addZombie);

router.post('/add', zombiesController.postZombie);

router.get('/list', zombiesController.getZombies);

router.put('/update/:id', zombiesController.updateZombieState);

module.exports = router;