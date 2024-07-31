import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    id: Number,
    name: String,
    price: Number,
    des: String,
    hot: Number, 
    new: Number, 
    images:String,
    relatedimages:Array,
    categoryId:String,
});

const Product = mongoose.model('Product', productSchema);

export default Product;