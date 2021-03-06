const express = require('express') // ExpressJS
const orders = require('./routes/orders') // Orders's route
const mongoose = require('mongoose') // Mongoose for easier management of databse & CRUD in MongoDB
const BP = require('body-parser') // for CROS 
require('dotenv').config()
const app = express() 
const port = 3000;

// Connection to the DB MongoDB Atlas
mongoose.connect(process.env.DB_CONNECT, 
{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connexion à MongoDB réussie'))
.catch(() => console.log('Connexion fail'))

// CORS 
app.use(BP.urlencoded({ extended: true }))
app.use(BP.json())
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'),
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'),
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS')
    next()
})

app.set('view engine', 'ejs')

// Initial route for homepage
app.get('/', (req, res) => {
    res.render('pages/index')
})
// Order's Route
app.use('/orders', orders);
// 404 route
app.use((req, res, next) => {
    res.status(404).send('<h1>404 - Page not found.</h1>')
});
// Port to listen
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})