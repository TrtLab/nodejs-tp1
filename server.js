const express = require('express')
const orders = require('./orders')
const app = express()
const port = 3000;

app.get('/', (req, res) => {
    res.send('Bonjour Romaric Touroute !')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})

app.use('/orders', orders);

app.use((req, res, next) => {
    res.send('<h1>404 - Page not found.</h1>')
});