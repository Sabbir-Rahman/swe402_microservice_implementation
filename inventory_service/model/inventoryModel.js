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

const inventorySchema = mongoose.Schema({
    name: requiredString,
    phone: requiredString,
    address: isString
})

module.exports = mongoose.model('Customer', inventorySchema)