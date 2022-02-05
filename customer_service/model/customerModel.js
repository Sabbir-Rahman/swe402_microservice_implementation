const mongoose  =  require('mongoose')

//this is for replicating required
const requiredString = {
    type: String,
    required: true
}

const isString = {
    type: String,
    
}

const requiredUniqueString = {
    type: String,
    required: true,
    unique: true
}

const customerSchema = mongoose.Schema({
    fullname: isString,
    email: requiredUniqueString,
    phone_no: isString,
    address: isString,
    image: isString,
    user_role: String
    
})

module.exports = mongoose.model('Customer', customerSchema)