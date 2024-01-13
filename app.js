const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbUri = 'mongodb://admin:password@localhost:27017/ice-cream?authSource=admin';

const initializeIceCreams = async () => {
  const flavors = ['chocolate', 'strawberry', 'blueberry'];
  for (const flavor of flavors) {
    let iceCream = await iceCreams.findOne({ flavor: flavor });
    if (!iceCream) {
      iceCream = new iceCreams({ flavor: flavor, stock: 10 });
      await iceCream.save();
    }
  }
};
//connet to mongoDB

mongoose.connect(dbUri)
  .then((result)=>{
    initializeIceCreams();
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

app.post('/sell/:flavor', async (req, res) => {
  const flavor = req.params.flavor;
  try {
    const iceCream = await iceCreams.findOne({ flavor: flavor });
    if (iceCream && iceCream.stock > 0) {
      iceCream.stock -= 1; // 减少库存
      await iceCream.save();
      res.json({ stock: iceCream.stock });
    } else {
      res.status(400).json({ message: `${flavor} is sold out!` });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/restock/:flavor/:quantity', async (req, res) => {
  const flavor = req.params.flavor;
  const quantity = parseInt(req.params.quantity, 10);
  try {
    const iceCream = await iceCreams.findOne({ flavor: flavor });
    if (iceCream) {
      iceCream.stock += quantity; // 增加库存
      await iceCream.save();
      res.json({ stock: iceCream.stock });
    } else {
      res.status(400).json({ message: `Flavor ${flavor} not found` });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/stock/:flavor', async (req, res) => {
  const flavor = req.params.flavor;
  try {
    const iceCream = await iceCreams.findOne({ flavor: flavor });
    if (iceCream) {
      res.json({ stock: iceCream.stock });
    } else {
      res.status(404).json({ message: `Flavor ${flavor} not found` });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


//register view engine
app.set('view engine','ejs');
//listen for requests


//static files, allow access
app.use(express.static('public'));

app.get('/',(req,res)=>{

  res.render('index');//specify the root

});