const User = require('../models/User')
const {validationResult} = require('express-validator')
const axios = require('axios')

const userCtrl ={}

userCtrl.search = async(req,res) => {
    const uid = req.query.uid
    // const errors = validationResult(req)
    // // console.log(errors)
    // if(!errors.isEmpty()){
    //     return res.status(400).json({errors:errors.array()})
    // }


    try{
        const user = await User.findOne({uid})
        if(!user){
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${uid}`)
            const {id, username, email, address} = response.data
            const userObj = {
                    uid:id,
                    username,
                    email,
                    address:{
                        city:address.city,
                        zipcode: address.zipcode
                    }
            }
            const newUser = await User.create(userObj)
            return res.status(201).json(newUser)
        }
        res.json(user)
        
    }catch(err){
        console.log(err.message)
        res.status(500).json('Something went wrong')

    }
}
module.exports = userCtrl