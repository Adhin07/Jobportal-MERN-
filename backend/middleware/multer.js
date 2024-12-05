const multer  = require('multer');
const path =require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './file')
    },
    filename: function (req, file, cb) {
      let ext=path.extname(file.originalname)
      cb(null, Date.now() + ext)
    }
  })

  const upload = multer({ storage: storage }).single('file'); 
  

module.exports=upload
  