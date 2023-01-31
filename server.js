const express = require('express')
const app=express()
const port=300

const router=require('./routes/router')
const mongoose =require('mongoose')
//const {initUsers}=require('./controller/controller')
mongoose.set("strictQuery", false) // without this i get error
mongoose.connect('mongodb+srv://gal:963963@cluster0.duda4.mongodb.net/?retryWrites=true&w=majority')
const db= mongoose.connection
db.on('error',(error)=>console.log(error))
db.on('open',(error)=>console.log('connected to database'))

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//initUsers();
app.use('/api',router)

app.listen(3000,()=>console.log(`server started on port ${port}`))