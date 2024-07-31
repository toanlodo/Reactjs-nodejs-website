
import './ProductDetail.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Modal from '../Modal/Modal';
import { addToCart } from '../../Features/cart/cartslide';
import { useDispatch } from 'react-redux';
export const ProductDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageSrc, setModalImageSrc] = useState('');
    const [mainImageSrc, setMainImageSrc] = useState('');
    
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/product/${id}`);
                setProduct(response.data);
                setMainImageSrc(`/images/${response.data.images}`);

                const relatedResponse = await axios.get(`http://localhost:5000/category/${response.data.categoryId}`);
                console.log('All related products:', relatedResponse.data);

                const filteredRelatedProducts = relatedResponse.data
                    .filter(prod => prod.id !== parseInt(id))   
                    .slice(0, 4);

                setRelatedProducts(filteredRelatedProducts);
            } catch (error) {
                console.error('Error fetching product', error);
            }
        };
        fetchProduct();
    }, [id]);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    const openModal = (imageSrc) => {
        setModalImageSrc(imageSrc);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalImageSrc('');
    };

    const handleRelatedImageClick = (imageSrc) => {
        setMainImageSrc(`/images/${imageSrc}`);
    };

    const handleAddToCart = () => {
        if (product) {
            dispatch(addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                quantity,
                images: product.images,
            }));
        }
    };
    
    if (!product) {
        return <div className='container'>Loading...</div>;
    }

    return (
        <>
            <div className="productDetail">
                <div className="container">
                    <div className="productDetail-widget">
                        <div className="row g-5">
                            <div className="col">
                                <div className="smallHead">
                                    <div className="container">
                                        <div className="smallHead-widget">
                                            <a href="/">Home </a>
                                            <a href="/products">Products</a>
                                            <span>Product Detail</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="productDetail-left">
                                    <div className="productDetail-img d-flex justify-content-center">
                                        <img 
                                            src={mainImageSrc} 
                                            alt="" 
                                            onClick={() => openModal(mainImageSrc)} 
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </div>
                                    <div className="productDetail-img-related">
                                        <div className="row g-2">
                                            {Array.isArray(product.relatedimages) && product.relatedimages.slice(0, 5).map((image, index) => (
                                                <div key={index} className="col">
                                                    <div 
                                                        className="productDetail-img-related-box"
                                                        onClick={() => handleRelatedImageClick(image)}
                                                        style={{ cursor: 'pointer' }}
                                                    >
                                                        <img src={`/images/${image}`} alt={`Related ${index + 1}`} />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col">
                                <div className="productDetail-right">
                                    <div className="productDetail-content">
                                        <div className="productDetail-title">
                                            <h2>{product.name}</h2>
                                        </div>
                                        <div className="productDetail-price">
                                            <h4>{formatCurrency(product.price)}</h4>
                                        </div>
                                        <div className="productDetail-des">
                                            <p>{product.des}</p>
                                        </div>
                                        <div className="productDetail-moreDes">
                                            <ul>
                                                <li>
                                                    <p>Phù hợp với Windows XP/Vista/7/8/10, macOS, iOS, Android, Chrome OS</p>
                                                </li>
                                                <li>
                                                    <p>Sản phẩm đảm bảo hàng thật, uy tín với trên 10 năm kinh nghiệm</p>
                                                </li>
                                                <li>
                                                    <p>Có thể dùng để học tập, làm việc, sử dụng đa thiết bị</p>
                                                </li>
                                                <li>
                                                    <p>Bảo hành theo chính sách, theo điều kiện đã được thỏa thuận</p>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="productDetail-quanity-addcart d-flex">
                                            <div className="productDetail-quantity d-flex">
                                                <div className="productDetail-quantity-number d-flex justify-content-center">
                                                    <p id="quantity">{quantity}</p>
                                                </div>
                                                <div className="productDetail-quantity-content">
                                                    <div className="productDetail-quantity-up">
                                                        <i className="fa-solid fa-angle-up" onClick={increaseQuantity}></i>
                                                    </div>
                                                    <div className="productDetail-quantity-down">
                                                        <i className="fa-solid fa-angle-down" onClick={decreaseQuantity}></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="productDetail-addcart">
                                                <button className="btn" onClick={handleAddToCart}>Thêm vào giỏ hàng</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="productDetail-bottom">
                <div className="comment">
                    <div className="container">
                        <div className="comment-widget">
                            <div className="comment-header">
                                <div className="comment-title d-flex justify-content-center">
                                    <span>Bình luận</span>
                                </div>
                            </div>
                            <div className="comment-bottom">
                                <div className="comment-text d-flex justify-content-center">
                                    <p>Hãy để lại bình luận của bạn</p>
                                </div>
                                <div className="comment-button d-flex justify-content-center">
                                    <button className="btn">Bình luận ngay</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relatedProd">
                <div className="container">
                    <div className="relatedProd-widget">
                        <div className="relatedProd-title open-sans">
                            <h4>Sản phẩm liên quan</h4>
                        </div>
                        <div className="relatedProd-box">
                            <div className="row g-3">
                                {relatedProducts.map((relatedProduct) => (
                                    <div className="col" key={relatedProduct._id}>
                                        <div className="products-main justify-content-center">
                                            <div className="products-header d-flex justify-content-between">
                                                <div className="products-header-left justify-content-start open-sans">
                                                    <p>Liên quan</p>
                                                </div>
                                                <div className="products-header-right justify-content-end">
                                                    <div className="products-right-img">
                                                        <i className="fa-regular fa-heart"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="products-img d-flex justify-content-center">
                                                <Link to={`/product/${relatedProduct.id}`} className="nav-link active" aria-current="page">
                                                    <img src={`/images/${relatedProduct.images}`} alt="" />
                                                </Link>
                                            </div>
                                            <div className="products-title">
                                                <a href="">
                                                    <h5>{relatedProduct.name}</h5>
                                                </a>
                                            </div>
                                            <div className="products-price">
                                                <p>{formatCurrency(relatedProduct.price)}</p>
                                            </div>
                                            <div className="products-addtocart d-flex justify-content-center">
                                                <button className="btn">Thêm vào giỏ hàng</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} imageSrc={modalImageSrc} />
        </>
    );
}
