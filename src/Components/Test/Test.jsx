import './Home.css'
import { useEffect, useState } from 'react';
import { initializeSlider } from './HomeScript';
import { Link } from 'react-router-dom';
import axios from 'axios';

export const Home = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 4;
    const dotsCount = 3;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const reponse = await axios.get('http://localhost:5000/products')
                setProducts(reponse.data);
            } catch (error) {
                console.error('Lỗi fetch sản phẩm', error)
            }
        };

        fetchProducts();
        initializeSlider();
    }, []);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    // const NewProducts = products.sort((a,b)=>b.id - a.id).slice(1,5);
    // const HotProducts = products.filter(product => product.hot === 1)

    const handleDotClick = (index) => {
        setCurrentPage(index);
    };

    const startIndex = currentPage * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const displayedProducts = products.slice(startIndex, endIndex);

    const totalPages = Math.ceil(products.length / productsPerPage);
    const dotsToShow = Math.min(totalPages, dotsCount);

    const startDot = Math.max(0, currentPage - Math.floor(dotsToShow / 2));
    const endDot = Math.min(totalPages - 1, startDot + dotsToShow - 1);

    const adjustedStartDot = Math.max(0, endDot - dotsToShow + 1);
    return (
        // <!-- banner -->
        <>
            <body>
                <div className="homePage">
        
                  
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
                                                            <img src={`public/images/${product.images}`} alt="" />
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
                                                        <button className="btn">Thêm vào giỏ hàng</button>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="dots-container">
                                    {Array.from({ length: dotsToShow }).map((_, index) => (
                                        <span
                                            key={index}
                                            className={`dot ${adjustedStartDot + index === currentPage ? 'active' : 'inactive'}`}
                                            onClick={() => handleDotClick(adjustedStartDot + index)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                 
                    
                  
                    
                </div>
            </body>
        </>
    )
}