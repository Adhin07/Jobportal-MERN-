const express=require("express")
const userSignUpController = require("../Controller/SignUp")
const cookieParser = require("cookie-parser")
const userLoginController = require("../Controller/Login")
const userDetailsController = require("../Controller/userDetailsController")
const authToken = require("../middleware/authToken")
const updateUser = require("../Controller/updateUser")
const userLogout = require("../Controller/userLogout")


const router =express.Router()

router.use(cookieParser())


router.post("/signup",userSignUpController)
router.post("/login",userLoginController)
router.get("/user-details",authToken,userDetailsController)
router.post("/update-user",authToken,updateUser)
router.get("/user-logout",userLogout)

module.exports=router