// DEPENDENCIES
const express = require('express')
const app = express()
const {Sequelize} = require ('sequelize')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


/* Sequilize Connection
const sequelize = new Sequelize(process.env.PG_URI)

//Test the connecion to DB
try {
    sequelize.authenticate()
    console.log(`Connect to SQL DB at ${process.env.PG_URI}`)
} catch (err){
    console.log(`unable to connect to PG: ${err}`)
}
*/


/*
// SEQUELIZE CONNECTION 2
        const sequelize = new Sequelize({
          storage: process.env.PG_URI,
          dialect: 'postgres',
          username: 'postgres',
          password: 'my_password'
        })      
*/

// ROOT
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the Tour API'
    })
})

//Controllers
const bandsController = require('./controllers/band_controllers')
app.use('/bands', bandsController)

const eventsController = require('./controllers/event_controllers')
app.use('/events', eventsController)

const stagesController = require('./controllers/stage_controllers')
app.use('/stages', stagesController)

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Rockin' on port: ${process.env.PORT}`)
})