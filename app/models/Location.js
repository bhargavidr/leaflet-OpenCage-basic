const mongoose = require('mongoose')

const {Schema, model} = mongoose

const locationSchema = new Schema ({
    address:String,
    lat:Number,
    lng:Number
})

const Location = model('location',locationSchema)

module.exports = Location