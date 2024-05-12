const {validationResult, checkSchema} = require('express-validator')
const userValidation = {
    uid:{
        exists:{
            errorMessage:'uid is required'
        },
        notEmpty:{
            errorMessage:'uid is empty'
        }
    }
}

checkSchema(userValidation);

const checkUser = async(req,res,next) => {
    console.log(req.query,'req')
    
    const errors = validationResult(req.query)
    console.log(errors)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    next()
}

// module.exports = userValidation
module.exports = checkUser