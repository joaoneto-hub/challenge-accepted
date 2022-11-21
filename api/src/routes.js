const express = require('express');

const weatherController = require('./controllers/weather');
const localesController = require('./controllers/locales');


const routes = express.Router()

routes.get('/weather/:id', weatherController.get)
routes.get('/locales', localesController.get)

module.exports = routes
