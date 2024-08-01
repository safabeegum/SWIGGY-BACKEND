const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const bcrypt = require("bcrypt")
const loginModel = require("./models/admin")

let app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://safabeegum:mongodb24@cluster0.pbzbbey.mongodb.net/swiggydb?retryWrites=true&w=majority&appName=Cluster0")

app.get("/test",(req,res)=>{
    res.json({"status":"success"})
})


app.post("/adminSignup",(req,res)=>{
    let input = req.body
    let hashedPassword = bcrypt.hashSync(input.password,10)
    //console.log(hashedPassword)
    input.password = hashedPassword
    console.log(input)
    let result = new loginModel(input)
    result.save()
    res.json({"status":"success"})

})


app.listen(8080,()=>{
    console.log("server started")
})