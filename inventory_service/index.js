const express = require('express')
const app = express()
const mongoose = require('mongoose')
const inventorySchema = require('./model/inventoryModel')

const PORT = 5002
const CONNECTION_URL = ''


app.listen(PORT,(req,res)=>{
    console.log(`Server is listening on ${PORT}`)
})

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/',(req,res)=>{
    res.send("Welcome from inventory service")
})

app.post('/addInventory',async(req,res)=> {
    const {name,phone,address} = req.body
    
    //new user object
    const newInventory = {
        name:name,
        phone: phone,
        address: address
    }

    try{
        await new inventorySchema(newInventory).save()
        res.status(201).json(newInventory)
    } catch (error){
        res.status(409).json({message: error.message})
    }
})

app.get('/viewInventory',async(req,res)=> {
    const response = await inventorySchema.find()

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


