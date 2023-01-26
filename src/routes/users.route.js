const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller.js')

router.get('/', usersController.getAll);
router.get('/:id', usersController.showUser);

module.exports = router;