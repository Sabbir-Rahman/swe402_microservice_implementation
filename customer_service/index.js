const express = require('express')
const app = express()
const mongoose = require('mongoose')
const customerSchema = require('./model/customerModel')

const PORT = 5000
const CONNECTION_URL = ''

app.listen(PORT,(req,res)=>{
    console.log(`Server is listening on ${PORT}`)
})


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/',(req,res)=>{
    res.send("Welcome from customer service")
})

app.post('/addCustomer',async(req,res)=> {
    const {fullname,email,phone,address} = req.body
    
    //new user object
    const newCustomer = {
        fullname:fullname,
        email: email,
        phone: phone,
        address: address
    }

    try{
        await new customerSchema(newCustomer).save()
        res.status(201).json(newCustomer)
    } catch (error){
        res.status(409).json({message: error.message})
    }
})

app.get('/viewCustomer',async(req,res)=> {
    const response = await customerSchema.find()

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

