const locationValidationSchema = {
    address:{
        exists:{
            errorMessage:'address is required'
        },
        notEmpty:{
            errorMessage:'address is empty'
        }
    }
}

module.exports = locationValidationSchema
