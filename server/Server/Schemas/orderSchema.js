const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    orderid:Number,
    name:String,
    email:String,
    phone:Number,
    address:String,
    cod:Boolean,
    order:[{pid:Number,pq:Number}],
})

module.exports = mongoose.model('Order',orderSchema);