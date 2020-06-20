const express = require('express')
const app = express();
const morgan = require("morgan");
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator');
//db
mongoose.connect('mongodb://127.0.0.1:27017/node-react-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology:true
}).then(console.log("db connected"))

mongoose.connection.on('error',(err)=>{
    console.log(`DB Connection error : ${err.message}`)
})
//routes
const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth')



//middleware
// const myownMiddleWare = (req,res,next) =>{
//     console.log("MiddleWare Applied")
//     next()
// }
app.use(morgan("dev"));
app.use(bodyParser.json())
app.use(expressValidator());
app.use('/',postRoutes)
app.use('/',authRoutes)
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
      res.status(401).json({error:'you need to authitcate first'});
    }
  });
const port = 8080;
app.listen(port,()=>{
    console.log(`A nod js Api is listnening on port : ${port}`)
});