// firstname: 'Gal',lastname:'Dahan',email:'963gal963@gmail.com' ,id: '207232349'
// firstname: 'omri ',lastname:'rachmani',id:'206924672'

const express = require('express')
const router=express.Router()
const {getAbout,
     setCost,
     getReport
    }= require('../controller/controller')
    
router.get('/about',getAbout)
router.post('/addcost',setCost)
router.get('/report',getReport)

module.exports=router