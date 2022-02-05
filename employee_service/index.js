const express = require('express')
const app = express()
const mongoose = require('mongoose')
const employeeSchema = require('./model/employeeModel')

const PORT = 5001
const CONNECTION_URL = ''

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.listen(PORT,(req,res)=>{
    console.log(`Server is listening on ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send("Welcome from employee service")
})

app.post('/addEmployee',async(req,res)=> {
    const {fullname,email,phone,address} = req.body
    
    //new user object
    const newEmployee = {
        fullname:fullname,
        email: email,
        phone: phone,
        address: address
    }

    try{
        await new employeeSchema(newEmployee).save()
        res.status(201).json(newEmployee)
    } catch (error){
        res.status(409).json({message: error.message})
    }
})

app.get('/viewEmployee',async(req,res)=> {
    const response = await employeeSchema.find()

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


