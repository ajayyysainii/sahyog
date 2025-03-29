const express= require("express")
const router= express.Router();
const user = require("../models/user")

 
router.post("/createuser", async(req,res)=>{
    try { 
       await user.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            gender: req.body.gender,
            mobileNumber: req.body.mobileNumber
        })
        res.json({success:true})
    } catch (error) {
        console.log(error)
        res.json({success:false})
        
    }
})

module.exports = router
