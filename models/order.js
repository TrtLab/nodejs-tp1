const mongoose = require('mongoose')

// Schema we want to create in DB
const orderSchema = mongoose.Schema({
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
    userId: { type: String, required: true },
    price: { type: Number, required: true },
})

module.exports = mongoose.model('Order', orderSchema)