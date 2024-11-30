const express=require("express")
const userSignUpController = require("../Controller/SignUp")
const cookieParser = require("cookie-parser")
const userLoginController = require("../Controller/Login")
const userDetailsController = require("../Controller/userDetailsController")
const authToken = require("../middleware/authToken")


const router =express.Router()

router.use(cookieParser())


router.post("/signup",userSignUpController)
router.post("/login",userLoginController)
router.get("/user-details",authToken,userDetailsController)

module.exports=router