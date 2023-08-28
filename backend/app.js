const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes')

/**
 * parse json request body
 */
app.use(express.json())

/**
 * enabling cors
 */
app.use(cors())
app.options('*', cors())

/**
 * Re-route all api requests starting with /v1
 */
app.use('/v1', routes)


module.exports = app;