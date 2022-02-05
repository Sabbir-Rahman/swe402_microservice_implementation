const express = require('express')
const app = express()

const PORT = 5001

app.listen(PORT,(req,res)=>{
    console.log(`Server is listening on ${PORT}`)
})

app.get('/',(req,res)=>{
    res.send("Welcome from employee service")
})


