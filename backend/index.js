const express = require('express');
const connectDB = require('./config/db');
const app = express();
const cors =require('cors')

app.use(cors(
  {
      origin : process.env.FRONTEND_URL,
      credentials :true
  }
))

const PORT =8080 || process.env.PORT


connectDB().then(()=>{
  app.listen(PORT, () => {
    console.log('Server is running');
  });
})

module.exports=app
