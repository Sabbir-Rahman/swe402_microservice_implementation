const mongoose  =  require('mongoose')

const orderSchema = mongoose.Schema({
    name: String,
    category: String,
    inventoryId: String,
    customerId: String,
    employeeId:String,
    price: String
    
})

module.exports = mongoose.model('Order', orderSchema)