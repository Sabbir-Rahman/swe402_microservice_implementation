const express = require('express')
const app = express()
const mongoose = require('mongoose')
const orderSchema = require('./model/orderModel')

const PORT = 5003
const CONNECTION_URL = ''


app.listen(PORT,(req,res)=>{
    console.log(`Server is listening on ${PORT}`)
})

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/',(req,res)=>{
    res.send("Welcome from order service")
})

app.post('/addOrder',async(req,res)=> {
    const {name,category,inventoryId,customerId} = req.body
    
    //new user object
    const newOrder = {
        name,
        category,
        inventoryId,
        customerId
    }

    try{
        await new orderSchema(newOrder).save()
        res.status(201).json(newOrder)
    } catch (error){
        res.status(409).json({message: error.message})
    }
})

app.get('/viewOrder',async(req,res)=> {
    const response = await orderSchema.find()

    return res.status(200).json(response)
})

const connectDB = async () => {
  try {
      await mongoose.connect(CONNECTION_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true
      });

      console.log('MongoDB connected!!');
  } catch (err) {
      console.log('Failed to connect to MongoDB', err);
  }
};

connectDB();

module.exports = app


