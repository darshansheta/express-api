const express = require('express');
const router = express.Router();
const usersRoute = require('./users.route');

router.use('/users', usersRoute);

//TODO list all routes

module.exports = router;