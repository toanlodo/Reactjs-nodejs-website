import './Home.css'
import { useEffect, useState } from 'react';
import { initializeSlider } from './HomeScript';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Features/cart/cartslide';
// import { CartContext } from '../Cart/CartContext';

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [categories, setCategories] = useState([]);
    const [blogs, setBlogs] = useState([]);
    // const { addToCart } = useContext(CartContext);
    const productsPerPage = 4;
    const dotsCount = 3;
    const dispatch = useDispatch();

    const handleAddToCart=(product)=>{
        dispatch(addToCart(product));
    };
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const reponse = await axios.get('http://localhost:5000/products')
                setProducts(reponse.data);
            } catch (error) {
                console.error('Lỗi fetch sản phẩm', error)
            }
        };
        const fetchCategories = async () => {
            try {
                const reponse = await axios.get('http://localhost:5000/categories')
                setCategories(reponse.data)
            } catch (error) {
                console.error('Lỗi fetch danh mục', error)
            }
        };
        const fetchBlogs = async () => {
            try {
                const reponse = await axios.get('http://localhost:5000/blogs')
                setBlogs(reponse.data)
            } catch (error) {
                console.log('Lỗi fetch tin tức', error)
            }
        }

        fetchBlogs();
        fetchCategories();
        fetchProducts();
        initializeSlider();
    }, []);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };
    const NewProducts = [...products].sort((a, b) => b.id - a.id);
    const HotProducts = products.filter(product => product.hot === 1)

    // phan trang NewProducts

    const maxProductsToDisplay = dotsCount * productsPerPage;
    const limitedProducts = NewProducts.slice(0, maxProductsToDisplay);

    const handleDotClick = (index) => {
        setCurrentPage(index);
    };

    const startIndex = currentPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const displayedProducts = limitedProducts.slice(startIndex, endIndex);

    const totalPages = Math.ceil(limitedProducts.length / productsPerPage);
    const dotsToShow = Math.min(totalPages, dotsCount);

    const startDot = Math.max(0, currentPage - Math.floor(dotsToShow / 2));
    const endDot = Math.min(totalPages - 1, startDot + dotsToShow - 1);

    const adjustedStartDot = Math.max(0, endDot - dotsToShow + 1);

    return (
        // <!-- banner -->
        <>
            <body>
                <div className="homePage">
                    <div className="banner">
                        <div className="slider">
                            <div className="list">
                                <div className="item">
                                    <img src="images/banner.jpg" alt="" />
                                </div>
                                <div className="item">
                                    <img src="images/banner2.jpg" alt="" />
                                </div>
                                <div className="item">
                                    <img src="images/banner3.jpg" alt="" />
                                </div>
                                <div className="item">
                                    <img src="images/banner4.jpg" alt="" />
                                </div>
                            </div>
                            <div className="slider-btn">
                                <button id="prev">
                                    <span className="material-icons-sharp">
                                        navigate_before
                                    </span>
                                </button>
                                <button id="next">
                                    <span className="material-icons-sharp">
                                        navigate_next
                                    </span>
                                </button>
                            </div>
                            <ul className="dots">
                                <li className="active"></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>

                    <div className="home-listcate">
                        <div className="container">
                            <div className="listcate-widget">
                                <div className="row g-5">
                                    <div className="col">
                                        <div className="listcate-widget-grid">
                                            <div className="listcate-col-content">
                                                <div className="listcate-content-title open-sans">
                                                    <span>Màn hình</span>
                                                </div>
                                                <div className="listcate-content-text open-sans">
                                                    <p>Xem ngay &gt;</p>
                                                </div>
                                            </div>
                                            <div className="listcate-col-img">
                                                <Link to={`/category/4`}>
                                                    <img src="images/prodScreen3.png" alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="listcate-widget-grid">
                                            <div className="listcate-col-content">
                                                <div className="listcate-content-title open-sans">
                                                    <span>Laptop</span>
                                                </div>
                                                <div className="listcate-content-text open-sans">
                                                    <p>Xem ngay &gt;</p>
                                                </div>
                                            </div>
                                            <div className="listcate-col-img">
                                                <Link to={`/category/1`}>
                                                    <img src="images/prodLap2.png" alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="listcate-widget-grid">
                                            <div className="listcate-col-content">
                                                <div className="listcate-content-title open-sans">
                                                    <span>Tai nghe</span>
                                                </div>
                                                <div className="listcate-content-text open-sans">
                                                    <p>Xem ngay &gt;</p>
                                                </div>
                                            </div>
                                            <div className="listcate-col-img">
                                                <Link to={`/category/2`}>
                                                    <img src="images/prodHP2.png" alt="" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="products">
                        <div className="container">
                            <div className="products-area">
                                <div className="products-box-header">
                                    <div className="products-box-title open-sans" >
                                        <h4>Sản phẩm mới</h4>
                                    </div>
                                </div>
                                <div className="products-box open-sans">
                                    <div className="row g-3">
                                        {displayedProducts.map((product) => (
                                            <div key={product._id} className="col">
                                                <div className="products-main justify-content-center">
                                                    <div className="products-header d-flex justify-content-between">
                                                        <div className="products-header-left justify-content-start">
                                                            <p>NEW</p>
                                                        </div>
                                                        <div className="products-header-right justify-content-end">
                                                            <div className="products-right-img">
                                                                <i className="fa-regular fa-heart"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="products-img d-flex justify-content-center">
                                                        <Link to={`/product/${product.id}`} className="nav-link active" aria-current="page">
                                                            <img src={`/images/${product.images}`} alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="products-title">
                                                        <a href="">
                                                            <h5>{product.name}</h5>
                                                        </a>
                                                    </div>
                                                    <div className="products-price" style={{ color: 'red' }}>
                                                        <p>{formatCurrency(product.price)}</p>
                                                    </div>
                                                    <div className="products-addtocart d-flex justify-content-center">
                                                        <button className="btn" onClick={() => handleAddToCart(product)}>Thêm vào giỏ hàng</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="dots-container">
                                    {Array.from({ length: dotsToShow }).map((_, index) => (
                                        <span key={index} className={`dot ${adjustedStartDot + index === currentPage ? 'active' : 'inactive'}`} onClick={() => handleDotClick(adjustedStartDot + index)} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="miniBanner">
                        <div className="container">
                            <div className="miniBanner-widget">
                                <div className="row g-3">
                                    <div className="col">
                                        <div className="miniBanner-left">
                                            <div className="miniBanner-left-header">
                                                <div className="miniBanner-title">
                                                    <h4>Tai nghe Razer Kraken V3 Pro Wireless</h4>
                                                </div>
                                                <div className="miniBanner-des">
                                                    <span>Wireless - Bass dày</span>
                                                </div>
                                            </div>
                                            <div className="miniBanner-left-footer">
                                                <div className="miniBanner-text">
                                                    <p>Giá chỉ có</p>
                                                </div>
                                                <div className="miniBanner-price">
                                                    <strong>5,699,000đ</strong>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="miniBanner-img d-flex justify-content-center">
                                            <img src="images/prodHP4.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="products">
                        <div className="container">
                            <div className="products-area">
                                <div className="products-box-header">
                                    <div className="products-box-title open-sans" >
                                        <h4>Sản phẩm hot</h4>
                                    </div>
                                </div>
                                <div className="products-box open-sans">
                                    <div className="row g-3">
                                        {HotProducts.map((product) => (
                                            <div key={product.id} className="col">
                                                <div className="products-main justify-content-center">
                                                    <div className="products-header d-flex justify-content-between">
                                                        <div className="products-header-left justify-content-start">
                                                            <p>HOT</p>
                                                        </div>
                                                        <div className="products-header-right justify-content-end">
                                                            <div className="products-right-img">
                                                                <i className="fa-regular fa-heart"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="products-img d-flex justify-content-center">
                                                        <Link to={`/product/${product.id}`} className="nav-link active" aria-current="page">
                                                            <img src={`./images/${product.images}`} alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="products-title">
                                                        <a href="">
                                                            <h5>{product.name}</h5>
                                                        </a>
                                                    </div>
                                                    <div className="products-price" style={{ color: 'red' }}>
                                                        <p>{formatCurrency(product.price)}</p>
                                                    </div>
                                                    <div className="products-addtocart d-flex justify-content-center">
                                                        <button className="btn" onClick={() => handleAddToCart(product)}>Thêm vào giỏ hàng</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="moreProduct">
                        <div className="container">
                            <div className="moreProduct-widget">
                                <div className="row g-3">
                                    <div className="col">
                                        <div className="moreProduct-widget-grid">
                                            <div className="moreProduct-col-content">
                                                <div className="moreProduct-content-title open-sans">
                                                    <span> Gigabyte G27FC A | 27inch</span>
                                                </div>
                                                <div className="moreProduct-content-des">
                                                    <p>Cong - 27inch - FullHD - 170Hz</p>
                                                </div>
                                                <div className="moreProduct-content-sale">
                                                    <p>Sale cuối tuần</p>
                                                </div>
                                                <div className="moreProduct-content-price open-sans">
                                                    <p>20%</p>
                                                </div>
                                            </div>
                                            <div className="moreProduct-col-img">
                                                <img src="images/prodScreen5.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="moreProduct-widget-grid">
                                            <div className="moreProduct-col-content">
                                                <div className="moreProduct-content-title open-sans">
                                                    <span>Lenovo IdeaPad Gaming</span>
                                                </div>
                                                <div className="moreProduct-content-des">
                                                    <p>R7-6800H - 8GB - 512GB - RTX 3050</p>
                                                </div>
                                                <div className="moreProduct-content-sale">
                                                    <p>Giá sốc với giá gốc</p>
                                                </div>
                                                <div className="moreProduct-content-price open-sans">
                                                    <p>1100$</p>
                                                </div>
                                            </div>
                                            <div className="moreProduct-col-img">
                                                <img src="images/prodLap2.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="topCate">
                        <div className="container">
                            <div className="topCate-header-title">
                                <h5>Danh mục sản phẩm</h5>
                            </div>
                            <div className="topCate-listrow">
                                <div className="topCate-listitem row">
                                    {categories.map((category) => (
                                        <div className="col" key={categories.id}>
                                            <div className="topCate-item text-center">
                                                <div className="topCate-item-img">
                                                    <Link to={`/category/${category.id}`}>
                                                        <img src={`/images/${category.images}`} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="top-Cate-item-title">
                                                    <span>{category.name}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="brand">
                    <div className="container">
                        <div className="brand-widget">
                            <div className="brand-img justify-content-between d-flex">
                                <div className="brand-content d-flex justify-content-center">
                                    <img src="images/client-1.png" alt="" />
                                </div>
                                <div className="brand-content d-flex justify-content-center">
                                    <img src="images/client-2.png" alt="" />
                                </div>
                                <div className="brand-content d-flex justify-content-center">
                                    <img src="images/client-3.png" alt="" />
                                </div>
                                <div className="brand-content d-flex justify-content-center">
                                    <img src="images/client-4.png" alt="" />
                                </div>
                                <div className="brand-content d-flex justify-content-center">
                                    <img src="images/client-5.png" alt="" />
                                </div>
                                <div className="brand-content d-flex justify-content-center" style={{ border: 'none' }}>
                                    <img src="images/client-6.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="blogs">
                    <div className="container">
                        <div className="blog-widget">
                            <div className="blog-header">
                                <div className="blog-title">
                                    <h2>Tin tức mới nhất</h2>
                                </div>
                            </div>
                            <div className="blog-bottom">
                                <div className="row g-4">
                                    {blogs.map((blog) => (
                                        <div key={blog.id} className="col">
                                            <Link to={`/blog/${blog.id}`}>
                                                <div className="blog-img">
                                                    <img src={`./images/${blog.images}`} alt="" />
                                                </div>
                                            </Link>
                                            <div className="blog-content">
                                                <div className="blog-date">
                                                    <p>{blog.date}</p>
                                                </div>
                                                <Link to={`/blog/${blog.id}`}>
                                                    <div className="blog-name">
                                                        <h5>{blog.name}</h5>
                                                    </div>
                                                </Link>                                              
                                                <div className="blog-text">
                                                    <p>{blog.text}</p>
                                                </div>
                                                <Link to={`/blog/${blog.id}`}>
                                                    <div className="blog-readMore d-flex">
                                                        <strong>Đọc thêm</strong>
                                                        <span className="material-icons-sharp">
                                                            navigate_next
                                                        </span>
                                                    </div>
                                                </Link>                                                
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body >
        </>
    )
}