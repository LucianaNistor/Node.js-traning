'use strict'

const express = require('express');
const app = express();
const config = require('./config/index')

require('./config/express').initExpress(app)
require('./config/routes').initRoutes(app)
require('./config/mongoose').initMongoose(app)

app.listen(config.PORT, () => {
  console.log(`Example app listening at http://localhost:${config.PORT}`)
})
