// DOCS
// https://medium.com/@yugagrawal95/mongoose-mongodb-functions-for-crud-application-1f54d74f1b34

const { query } = require('express');
const express = require('express')
const { v4: uuidv4 } = require('uuid'); // UUID that generates a single ID
const Order = require('../models/order'); // DB Model
const router = express.Router() // Express router

// Middleware 
router.use(function timelog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// Order's Index Homepage
router.get('/', (req, res) => {
    res.send('Bienvenue sur la page des Orders !')
})
// Finds all orders in DB
router.get('/all', (req, res) => {
    Order.find({})
    .then((data) => {
        console.log(data)
    })
    .catch((err)=>{
        console.log(err);
    })
    res.status(200).send('Voici la liste des orders')
})
// Orders by ID
router.get('/:id', (req, res) => {
    let id = req.params.id
    Order.findById(id).then((doc) => console.log(doc)).catch((err) => console.log(err))
    res.status(200).send("Voici l'order avec l'ID: " + id)
})
// Create an order with UUID 
router.post('/', (req, res) => {
    let id = uuidv4();
    let order = {
        description: req.query.desc,
        imageUrl: req.query.img,
        userId: String(id),
        price: req.query.price,
    }
    // Modal object
    let newOrder = new Order(order)
    newOrder.save(newOrder)
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

    res.status(201).send("Order ID: " + id + " créé.")
})
// Update an order 
router.put('/:id', (req, res) => {
    let id = req.params.id

    Order.updateOne({ userId: id, imageUrl: req.query.img})
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

    res.status(200).send("Order ID: " + id + " modifié.")
})
// Delete an order
router.delete('/:id', (req, res) => {
    let id = req.params.id

    Order.deleteOne({ userId: id })    
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

    res.status(204).send()
})

// Export module for its use
module.exports = router
