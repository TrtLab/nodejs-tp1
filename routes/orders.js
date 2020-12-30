// DOCS
// https://medium.com/@yugagrawal95/mongoose-mongodb-functions-for-crud-application-1f54d74f1b34

const express = require('express')
const { v4: uuidv4 } = require('uuid'); // UUID that generates a single ID
const Order = require('../models/order'); // DB Model
const orderController = require('../controllers/orderController')
const router = express.Router() // Express router

// Middleware 
router.use(function timelog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

// Order's Index Homepage
router.get('/', (req, res) => { res.send('Bienvenue sur la page des Orders !') })
// Finds all orders in DB
router.get('/all', orderController.findAll)

// Orders by ID
router.get('/:id', orderController.findById)

// Create an order with UUID 
router.post('/', orderController.create)

// Update an order 
router.put('/:id', orderController.update)

// Delete an order
router.delete('/:id', )

// Export module for its use
module.exports = router
