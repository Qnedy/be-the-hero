const express = require('express');

const routes = express.Router();

routes.get('/users', (request, response) => {
  return response.json({
    teste: "json com response nodemon",
  });
});

module.exports = routes;