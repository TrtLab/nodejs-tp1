const Order = require('../models/order');

// Methods
exports.findAll = (req, res) => {
    Order.find({})
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err)=>{
        console.log(err);
    })
}

exports.findById = (req, res) => {
    let id = req.params.id
    Order.findById(id)
    .then((doc) => res.status(200).json(doc))
    .catch((err) => console.log(err))
}

exports.create = (req, res) => {
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
}

exports.update = (req, res) => {
    let id = req.params.id

    Order.updateOne({ userId: id, imageUrl: req.query.img})
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

    res.status(200).send("Order ID: " + id + " modifié.")
}

exports.delete = (req, res) => {
    let id = req.params.id

    Order.deleteOne({ userId: id })    
    .then((data) => console.log(data))
    .catch((err) => console.log(err))

    res.status(204).send()
}