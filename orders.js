const express = require('express')
const { v4: uuidv4 } = require('uuid');
const router = express.Router()

// Middleware 
router.use(function timelog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// Homepage
router.get('/', (req, res) => {
    res.send('Bienvenue sur la page des Orders !')
})
// Orders
router.get('/all', (req, res) => {
    res.send('Voici la liste des orders')
})
// Orders by ID
router.get('/:id', (req, res) => {
    res.send("Voici l'order avec l'ID: " + req.params.id)
})
// Create an order with UUID
router.post('/new', (req, res) => {
    let id = uuidv4();
    res.send("Order ID: " + id + " créé.")
})
// Update an order 
router.put('/:id', (req, res) => {
    res.send("Order ID: " + req.params.id + " modifié.")
})
router.delete('/:id', (req, res) => {
    res.send("Order ID: " + req.params.id + " supprimé.")
})
router.get('*', (req, res) => {
    res.send('Not found', 404)
})


module.exports = router
