const express = require('express');
const connectDB = require('./config/db');
const app = express();
require('dotenv').config()
const cors =require('cors');
const router=require('./routes/index');
const cookieParser = require('cookie-parser');


app.use(cors(
  {
      origin : process.env.FRONTEND_URL,
      credentials :true
  }
))


app.use(express.json())
app.use(cookieParser())
app.use("/api",router)



const PORT =8080 || process.env.PORT


connectDB().then(()=>{
  app.listen(PORT, () => {
    console.log('Server is running')
  });
})

module.exports=app
