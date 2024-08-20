import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import './CartCheckout.css'
import { useEffect, useState } from 'react';
import { clearCart } from '/src/Features/cart/cartslide';
export const CartCheckout = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const [paymentMethod, setPaymentMethod] = useState('COD');
    const shippingFee = 30000;
    const [showThankYou, setShowThankYou] = useState(false);
    const [formError, setFormError] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        fullname: '',
        phone: '',
        address: ''
    });
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser) {
            setUserData({
                fullname: storedUser.fullname,
                phone: storedUser.phone,
                address: storedUser.address
            });
        }
    }, []);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    const cartTotal = cartItems.reduce((acc, product) => {
        const price = parseFloat(product.price);
        const quantity = parseInt(product.quantity, 10);

        if (!isNaN(price) && !isNaN(quantity)) {
            return acc + (price * quantity);
        }
        return acc;
    }, 0);

    const totalAmount = cartTotal + shippingFee

    
    const validateForm = () =>{
        const formError ={};
        if (!userData.fullname) formError.fullname = 'Họ và tên không được bỏ trống';
        if(!userData.phone){
            formError.phone='Số điện thoại không được bỏ trống'
        } else if (!/^\d{10}$/.test(userData.phone)) {
            formError.phone = 'Số điện thoại phải là 10 chữ số.';
        }
        if(!userData.address) formError.address= 'Địa chỉ không được bỏ trống'
        return formError;
    };

    
    const payment = () => {
        const formErrors = validateForm();
        if (Object.keys(formErrors).length === 0) {
            setShowThankYou(true);
            setTimeout(() => {
                dispatch(clearCart());
                navigate('/');
            }, 2000);
        } else {
            setFormError(formErrors);
        }
    };


    const change = (e) => {
        const { name, value } = e.target;
        setUserData({
            ...userData,
            [name]: value
        });
        setFormError({
            ...formError,
            [name]: ''
        });
    };


    return (
        <>
            <div className="cartcheckout">
                <div className="container">
                    <div className="cartcheckout-box">
                        <div className="row">
                            <div className="col roboto-medium">
                                <div className="cartcheckout-payment">
                                    <div className="cartcheckout-payment-box">
                                        <div className="cartcheckout-payment-box-title text-uppercase text-center">
                                            <h3>Thanh toán</h3>
                                        </div>
                                        <div className="cartcheckout-payment-box-content">
                                            <form>
                                                <div className="cartcheckout-form-name">
                                                    <label htmlFor="fullname">Họ và tên:</label>
                                                    <br />
                                                    <input
                                                        type="text"
                                                        name="fullname"
                                                        placeholder='Nhập họ và tên...'
                                                        value={userData.fullname}
                                                        onChange={change}
                                                    />
                                                    {formError.fullname && <span>{formError.fullname}</span>}
                                                </div>
                                                <div className="cartcheckout-form-phone">
                                                    <label htmlFor="phone">Số điện thoại:</label>
                                                    <br />
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        placeholder='Nhập số điện thoại...'
                                                        value={userData.phone}
                                                        onChange={change}
                                                    />
                                                    {formError.phone && <span>{formError.phone}</span>}
                                                </div>
                                                <div className="cartcheckout-form-address">
                                                    <label htmlFor="address">Địa chỉ nhận hàng:</label>
                                                    <br />
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        placeholder='Nhập địa chỉ...'
                                                        value={userData.address}
                                                        onChange={change}
                                                    />
                                                    {formError.address && <span>{formError.address}</span>}
                                                </div>
                                                <div className="cartcheckout-form-note">
                                                    <label htmlFor="note">Ghi chú:</label>
                                                    <br />
                                                    <textarea name="note" id="note" placeholder='Nhập ghi chú...'></textarea>
                                                </div>
                                                <div className="cartcheckout-form-payment-method">
                                                    <label htmlFor="paymentMethod">Phương thức thanh toán:</label>
                                                    <br />
                                                    <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
                                                        <option value="COD">COD (Giao hàng tận nơi)</option>
                                                        <option value="CreditCard">Credit Card</option>
                                                        <option value="Paypal">Paypal</option>
                                                    </select>
                                                </div>
                                            </form>
                                            <div className="cartcheckout-payment-box-text">
                                                <p>Hãy đảm bảo các thông tin trên của bạn đã được chính xác trước khi thanh toán, mọi thông tin khách hàng sẽ được bảo mật theo <span>Chính sách khách hàng</span></p>
                                            </div>
                                            <div className="cartcheckout-payment-box-backtocart">
                                                <Link to="/products">
                                                    <p><i className="fa-solid fa-chevron-left" style={{ color: "#00ABC5" }} />Tiếp tục mua sắm</p>
                                                </Link>

                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="cartcheckout-products">
                                    <div className="cartcheckout-products-box mb-4">
                                        <div className="cartcheckout-products-box-title text-center roboto-medium">
                                            <h3>SẢN PHẨM CỦA BẠN</h3>
                                        </div>
                                        {cartItems.map((product) => (

                                            <div key={product.id} className="cartcheckout-products-box-content d-flex">
                                                <div className="cartcheckout-content-images">
                                                    <img src={`/images/${product.images}`} alt="" />
                                                </div>
                                                <div className="cartcheckout-content-main  roboto-medium ms-2">
                                                    <div className="cartcheckout-content-name">
                                                        <p>{product.name}</p>
                                                    </div>
                                                    <div className="cartcheckout-content-price-quantity d-flex">
                                                        <div className="cartcheckout-content-price">
                                                            <span>{formatCurrency(product.price)}</span>
                                                        </div>
                                                        <div className="cartcheckout-content-quantity">
                                                            <span>{product.quantity}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}

                                    </div>
                                </div>
                                <div className="cartcheckout-total d-flex justify-content-between roboto-medium mb-1">
                                    <div className="cartcheckout-products-box-total-title ">
                                        <span>Tổng giỏ hàng:</span>
                                    </div>
                                    <div className="cartcheckout-products-box-total-price">
                                        <span>
                                            {formatCurrency(cartTotal)}
                                        </span>
                                    </div>
                                </div>
                                {paymentMethod === 'COD' && (
                                    <div className="cartcheckout-cod-fee d-flex justify-content-between roboto-medium mb-1">
                                        <div className="cartcheckout-cod-fee-title">
                                            <span>Ship đồng giá:</span>
                                        </div>
                                        <div className="cartcheckout-cod-fee-price">
                                            <span>{formatCurrency(shippingFee)}</span>
                                        </div>
                                    </div>
                                )}
                                <div className="cartcheckout-total-amount d-flex justify-content-between roboto-medium">
                                    <div className="cartcheckout-total-amount-title">
                                        <span>Tổng cộng:</span>
                                    </div>
                                    <div className="cartcheckout-total-amount-price">
                                        <span>{formatCurrency(totalAmount)}</span>
                                    </div>
                                </div>
                                <div className="cartcheckout-payment-box-button">
                                    <button onClick={(payment)}>Thanh toán</button>
                                </div>
                                {showThankYou && (
                                    <div className="cartcheckout-thankyou-message text-center roboto-medium">
                                        <p>Cảm ơn bạn đã tin tưởng và mua sắm tại Gearshop!</p>
                                        <i className="fa-regular fa-face-smile-wink fa-2xl"></i>                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}