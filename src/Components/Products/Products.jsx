import './Products.css';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Features/cart/cartslide';


export const Products = () => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [titleCate, setTitleCate] = useState("");
    const { categoryId } = useParams();
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 9;
    const dotsCount = 3;
    const dispatch = useDispatch();

    const handleAddToCart=(product)=>{
        dispatch(addToCart(product));
    };
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://localhost:5000/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Lỗi khi fetch danh mục', error);
            }
        };

        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Lỗi khi fetch sản phẩm', error);
            }
        };

        fetchCategories();
        fetchProducts();
    }, []);

    useEffect(() => {
        if (categoryId) {
            const findCate = categories.find((item) => item.id === parseInt(categoryId));
            setTitleCate(findCate ? findCate.name : "Danh mục không tồn tại");
        } else {
            setTitleCate("Tất cả sản phẩm");
        }
    }, [categoryId, categories]);

    const filteredProducts = categoryId ? products.filter(product => product.categoryId === categoryId): products;


    const maxProductsToDisplay = dotsCount * productsPerPage;
    const limitedProducts = filteredProducts.slice(0, maxProductsToDisplay);

    const handleDotClick = (index) => {
        setCurrentPage(index);
    };

    const startIndex = currentPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const displayedProducts = limitedProducts.slice(startIndex, endIndex);

    const totalPages = Math.ceil(limitedProducts.length  / productsPerPage);
    const dotsToShow = Math.min(totalPages, dotsCount);

    const startDot = Math.max(0, currentPage - Math.floor(dotsToShow / 2));
    const endDot = Math.min(totalPages - 1, startDot + dotsToShow - 1);
    const adjustedStartDot = Math.max(0, endDot - dotsToShow + 1);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    const listCate = categories.map((category) => (
        <li key={category.id}>
            <Link to={`/category/${category.id}`}>
                {category.name}
            </Link>
        </li>
    ));

    return (
        <div className="products-page">
            <div className="products">
                <div className="container">
                    <div className="products-widget">
                        <div className="row g-5">
                            <div className="col-3">
                                <div className="products-Catelog-left">
                                    <div className="smallHead">
                                        <div className="container">
                                            <div className="smallHead-widget">
                                                <a href="/">Home </a>
                                                <span>Product</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="products-Catelog-widget">
                                        <ul>
                                            <div className="products-Catelog-title">
                                                <span>Danh mục sản phẩm</span>
                                            </div>
                                            <li>
                                                <Link to={`/products`}>
                                                    Tất cả sản phẩm
                                                </Link>
                                            </li>
                                            {listCate}
                                        </ul>
                                    </div>
                                </div>
                                <div className="products-blog-left">
                                    <div className="products-blog-widget">
                                        <div className="products-blog-title">
                                            <div className="products-blog-title-box">
                                                <h5>Tin tức</h5>
                                            </div>
                                            <div className="products-blog-title-shopNow">
                                                <Link to='/blog' className=" d-flex align-items-center">
                                                    <strong >Đọc ngay</strong>
                                                    <span className="material-icons-sharp">
                                                        navigate_next
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="products-blog-content">
                                            <div className="products-blog-box">
                                                <a href="">
                                                    <div className="products-blog-img">
                                                        <img src="/images/blog1.jpg" alt="" />
                                                    </div>
                                                </a>
                                                <div className="products-box-title">
                                                    <span>Hướng Dẫn Kết Nối Chuột Gaming E-Dra EM623W Qua 2.4Ghz Và Bluetooth</span>
                                                </div>
                                            </div>
                                            <div className="products-blog-box">
                                                <a href="">
                                                    <div className="products-blog-img">
                                                        <img src="/images/blog2.jpg" alt="" />
                                                    </div>
                                                </a>
                                                <div className="products-box-title">
                                                    <span>Endgame Gear XM2we Vs Pulsar X2 Wireless -Mẫu Chuột “SuperLight Killer” Chuẩn ?</span>
                                                </div>
                                            </div>
                                            <div className="products-blog-box">
                                                <a href="">
                                                    <div className="products-blog-img">
                                                        <img src="/images/blog3.png" alt="" />
                                                    </div>
                                                </a>
                                                <div className="products-box-title">
                                                    <span>Chương Trình Khuyến Mãi Màn Hình Viewsonic 2023 – Mua 1 Tặng 1</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-9">
                                <div className="products-box-right">
                                    <div className="products-box-widget">
                                        <div className="products-box-title">
                                            <h5>{titleCate}</h5>
                                        </div>
                                        <div className="products-box open-sans">
                                            <div className="row g-3">
                                                {displayedProducts.map((product) => (
                                                    <div key={product.id} className="col-4">
                                                        <div className="products-main justify-content-center">
                                                            <div className="products-header d-flex justify-content-between">
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
                                                            <div className="products-price">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
