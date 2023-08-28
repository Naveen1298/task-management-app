const express = require('express');
const taskRouter = require('./task.route')
const router = express.Router()

/**
 * Re-route all API requests for /v1/videos to fetch videos using GET request
 */
router.use('/tasks', taskRouter)

module.exports = router