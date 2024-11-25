const express=require("express")
const userSignUpController = require("../Controller/SignUp")
const cookieParser = require("cookie-parser")


const router =express.Router()

router.use(cookieParser())


router.post("/signup",userSignUpController)

module.exports=router