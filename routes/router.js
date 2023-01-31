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