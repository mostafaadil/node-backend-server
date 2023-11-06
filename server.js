const express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path: './config/config.env' })
const cors=require("cors")
const fileEasyUpload = require('express-easy-fileuploader')
const file_upload = require('./middleware/media_middleware')
   const awards=require('./routes/Awards');
   const cities=require('./routes/Cities');
   const countries=require('./routes/Countries');
   const poster_awareds=require('./routes/PosterAwareds');
   const recordes=require('./routes/Recordes');
   const recored_studants=require('./routes/RecoredStudants');
   const states=require('./routes/States');
   const unvarsecites=require('./routes/Unvarsecites');
   const users=require('./routes/Users');

const app = express()
const bodyParser = require('body-parser')
// const authenticate = require('./middleware/authenticate.js')
app.use(bodyParser.json())
// app.use(authenticate)
app.use(cors())
app.use(  
   fileEasyUpload({  
      app,  
  fileUploadOptions:{  
      // limits: { fileSize: 500 * 1024 * 1024 },  
  }  
   })  
);
app.use(file_upload)
          app.use('/api/awards',awards)
                   app.use('/api/cities',cities)
                   app.use('/api/countries',countries)
                   app.use('/api/poster-awareds',poster_awareds)
                   app.use('/api/recordes',recordes)
                   app.use('/api/recored-studants',recored_studants)
                   app.use('/api/states',states)
                   app.use('/api/unvarsecites',unvarsecites)
                   app.use('/api/users',users)
         
const PORT =5000
app.listen(PORT,
    () => console.log(`server is running on ,port is  ${PORT} `));
module.exports=app
 