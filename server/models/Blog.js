import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    id:Number,
    name:String,
    text:String,
    moretext:String,
    textheading:String,
    images:String,
    date:String,
    relatedimages:Array,
})

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;