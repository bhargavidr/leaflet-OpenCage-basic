const mongoose = require('mongoose')
const express = require('express')
const { checkSchema } = require('express-validator')
const app = express()
const PORT = 4044
require('dotenv').config();
const cors = require('cors')

const checkUser = require('./validators/userValidator')
const locationValidationSchema = require('./validators/locationValidatior')

const userCtrl = require('./controller/user-ctrl')
const locationCtrl = require('./controller/location-ctrl')

const configureDB = require('./config/dbConnect')
configureDB()
app.use(express.json());
app.use(cors())

//routes
app.get('/search' , userCtrl.search)
app.get('/locate', checkSchema(locationValidationSchema),locationCtrl.search )

app.listen(PORT,() => {
    console.log('notes app running on port '+PORT)
})





