const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.send('Ola ola');
});

module.exports = routes;