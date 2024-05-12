const mongoose = require('mongoose')
const PORT = 4044
const express = require('express')
const app = express()

const configureDB = async () => { 

    try{
        const db = await mongoose.connect('mongodb://127.0.0.1:27017/server-to-server')
        console.log('Connected to DB')
    }catch(err){
        console.log(err)
    }
}

module.exports = configureDB