const express = require('express')
const taskController = require('../controllers/task.controller')
const router = express.Router()


/**
 * Implement a GET route definition for /v1/videos/
 */
router.get('/', taskController.getTasks)

module.exports = router