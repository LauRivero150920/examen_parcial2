const express = require('express');

const zombiesController = require('../controllers/zombies-controller');

const router = express.Router();

router.get('/add', zombiesController.addZombie);

router.post('/add', zombiesController.postZombie);

router.get('/list', zombiesController.getZombies);

router.get('/list/infected', zombiesController.getZombiesInfected);

router.get('/list/disoriented', zombiesController.getZombiesDisoriented);

router.get('/list/violent', zombiesController.getZombiesViolent);

router.get('/list/passed', zombiesController.getZombiesPassed);

router.get('/list/transformed', zombiesController.getZombiesTransformed);

router.put('/update/:id', zombiesController.updateZombieState);

module.exports = router;