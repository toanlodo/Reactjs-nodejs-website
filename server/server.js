import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import Product from './models/Product.js'
import Category from './models/Category.js'
import Blog from './models/Blog.js';
import User from './models/User.js';

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const dbURI = 'mongodb://localhost:27017/Gearshop';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch(err => console.log(err));

// Simple route
app.get('/', (req, res) => {
    res.send('Hello from Express!');
});


app.get('/products', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).send('Error fetching products');
    }
});

app.get('/categories', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (err) {
        res.status(500).send('Error fetching categories');
    }
});
app.get('/product/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findOne({ id: parseInt(id) });
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.json(product);
    } catch (err) {
        res.status(500).send('Error fetching product');
    }
});
app.get('/category/:categoryId', async (req, res) => {
    const {categoryId} = req.params;
    try{
        const products = await Product.find({categoryId: categoryId}).limit(5);
        res.json(products);
    }catch(error){
        res.status(500).send('Error fetching products by category');
    }
});
app.get('/blogs', async (req,res) => {
    try{
        const blogs= await Blog.find();
        res.json(blogs)
    }catch(err){
        res.status(500).send('Error fetching blogs');
    }
})


app.get('/product/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findOne({ id: parseInt(id) });
        if (!product) {
            return res.status(404).send('Product not found');
        }
        res.json(product);
    } catch (err) {
        res.status(500).send('Error fetching product');
    }
});
app.get('/blog/:id', async (req,res) => {
    const { id } = req.params;
    try{
        const blog = await Blog.findOne({ id: parseInt(id) });
        if (!blog) {
            return res.status(404).send('Blog not found');
        }
        res.json(blog)
    }catch(err){
        res.status(500).send('Error fetching Blog Detail');
    }
})

app.post('/register', async (req, res) => {
    const { username, fullname, password, email } = req.body;

    try {
        // Kiểm tra xem username đã tồn tại chưa
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username đã tồn tại' });
        }
        
        // Tạo người dùng mới
        const newUser = new User({ username, fullname, password, email });
        await newUser.save();

        res.status(201).json({ message: 'Đăng ký thành công' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi máy chủ' });
    }
});


app.post('/login', async(req,res)=>{
    const {username,password} = req.body;

    try{
        const user= await User.findOne({username});
        if(!user){
            return res.status(400).json({message:'Tài khoản không tồn tại'});
        }

        if(user.password !== password){
            return res.status(400).json({message:'Không đúng mật khẩu'});
        }

        res.status(200).json({
            message:'Đăng nhập thành công',
            user: {
                username:user.username,
                password:user.password,
                email:user.email,
                address:user.address,
                phone:user.phone,
                fullname:user.fullname,
            }
        });
    }catch(error){
        res.status(500).json({message:'Lỗi máy chủ'});
    }
});


app.put('/user/:username', async (req, res) => {
    const { username } = req.params;
    const { fullname, password, email, address, phone } = req.body;

    try {
        const user = await User.findOneAndUpdate(
            { username },
            { fullname, password, email, address, phone },
            { new: true }
        );

        if (!user) {
            console.log('User not found');
        }
        res.status(200).json({ message: 'Cập nhật thông tin thành công', user });
    } catch (error) {
        console.error('Server error:', error);
        res.status(500).json({ message: 'Server error' });
    }
});
