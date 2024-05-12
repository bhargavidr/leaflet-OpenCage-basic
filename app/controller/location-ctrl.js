const {validationResult} = require('express-validator')
const axios = require('axios')
const opencage = require('opencage-api-client');

const Location = require('../models/Location')

const locationCtrl = {

}

locationCtrl.search = async(req,res) => {
    const myKey=process.env.KEY
    const address = req.query.address.trim()

    const errors = validationResult(req)    
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }

    const data = await Location.findOne({address})
    if(!data){
        try{
            const loc = await opencage.geocode({q: address, key:myKey})
            if(loc){
                const location = new Location({
                    address,
                    lat: loc.results[0].geometry.lat,
                    lng:loc.results[0].geometry.lng
                })
                // console.log(loc.results[0])
                await location.save()
                return res.status(200).send({location })
            }
            return res.send('loc object not present')
            
        }catch(err){
            console.log(err)
            res.status(400).send(err)
        }
    }
    res.status(200).send({location: data})
}


locationCtrl.map = async(req,res) => {
    
}

module.exports = locationCtrl