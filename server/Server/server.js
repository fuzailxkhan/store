const express =  require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const productSchema = require('./Schemas/productSchema');
const orderSchema = require('./Schemas/orderSchema')


const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/store")
.then(()=>console.log("Connected To Database"))
.catch((err)=>console.log("Database ran into",err.message))    

const db = mongoose.connection;
db.on('error',console.error.bind(console,'MongoDb Connection Error:'))
db.once('open',()=>console.log("MongoDB connected Successfully"))

const newProduct =productSchema({id:2,image:["./Public/P2417h"],title:"Dell U2417h",description:"Dell's Ultra Sharp Monitor",price:23000}) ;

newProduct.save()
  .then((product) => {
    console.log('Product created:', product);
  })
  .catch((err) => {
    console.error('Error creating product:', err);
  });



const getAllProducts = async () =>{
    const product  = await productSchema.find();
    return product;
}



app.get("/products",async(req,res)=>{
    console.log("req Recieved");
    const allProducts = await getAllProducts();
    const allProductsSend = [];
    for (let i=0 ; i<allProducts.length ; i++){

        const imgs = []
        allProducts[i].images.forEach((img)=>{
            imgs.push(fs.readFileSync(img))
        })
        
        const product = {
            id: allProducts[i].id,
            title: allProducts[i].title,
            price: allProducts[i].price,
            description: allProducts[i].description,
            image:imgs,
        }
        allProductsSend.push(product);
    }
    res.status(200);
    res.json(allProductsSend);
})

app.post("/checkout",async (req,res)=>{
    const shippingDetails = req.body.shipping;
    const orderDetails = req.body.order;
    const newOrder = orderSchema({name:shippingDetails.inputName,email:shippingDetails.inputEmail,phone:shippingDetails.inputNumber,address:shippingDetails.inputAddress,cod:shippingDetails.inputCOD,order:orderDetails});
    await newOrder.save();
    res.json("Confirmed")
})

app.listen(3000,(err)=>{
    if(err)throw err;
    console.log("Server Runing at Port 3000")
})
