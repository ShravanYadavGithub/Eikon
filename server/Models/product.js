const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: String,
    title:String,
    age:Number
});

exports.Product = mongoose.model('Product', productSchema);
