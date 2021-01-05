const express = require('express');
const routes = express.Router();

const SessionController = require('./controllers/SessionController');

routes.get('/', SessionController.store);

module.exports = routes;