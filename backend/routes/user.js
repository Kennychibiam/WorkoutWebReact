const { loginUser,signUpUser }=require('../controllers/userController')
const express=require('express')

const router=express.Router()

router.post('/login',loginUser)
router.post('/signup',signUpUser)


module.exports=router