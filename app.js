const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//connet to mongoDB
const dbUri = 'mongodb://admin:password@localhost:27017/ice-cream?authSource=admin';
mongoose.connect(dbUri)
  .then((result)=>{
    app.listen(3000);
    console.log('connected successfully')
  })
  .catch((err)=>{console.log(err)});

//use schema to define the structure of the document
const iceCreamSchema = new Schema({
    flavor: String,
    stock: Number
});
const iceCreams = mongoose.model('icecreams',iceCreamSchema);

//register view engine
app.set('view engine','ejs');
//listen for requests


//static files, allow access
app.use(express.static('public'));

app.get('/',(req,res)=>{

  res.render('index');//specify the root

});