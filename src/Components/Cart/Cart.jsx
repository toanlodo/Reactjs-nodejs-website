import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '/src/Features/cart/cartslide';
import './Cart.css';
import { Link } from 'react-router-dom';

export const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    let totalAmount = useSelector((state) => state.cart.totalAmount);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    totalAmount = cartItems.reduce((acc, product) => {
        const price = parseFloat(product.price);
        const quantity = parseInt(product.quantity, 10);

        if (!isNaN(price) && !isNaN(quantity)) {
            return acc + (price * quantity);
        }
        return acc;
    }, 0);

    return (
        <div className="cart">
            <div className="container">
                <div className="cart-box">
                    <div className="cart-table-header">
                        <h1>Giỏ hàng</h1>
                    </div>
                    {cartItems.length === 0 ? (
                        <div className="empty-cart">
                            <p>Giỏ hàng bạn đang trống, hãy mua sắm và quay lại nhé</p>
                        </div>
                    ) : (
                        <>
                            <table className="cart-table">
                                <thead>
                                    <tr style={{height:'60px'}}>
                                        <th>Tên sản phẩm</th>
                                        <th>Hình ảnh</th>
                                        <th>Giá</th>
                                        <th>Số lượng</th>
                                        <th>Tổng cộng</th>
                                        <th>Thao tác</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartItems.map((product) => (
                                        <tr key={product.id} style={{height:'130px'}}>
                                            <td className='cart-productname text-center'>
                                                <p>{product.name}</p>
                                            </td>
                                            <td>
                                                <img src={`/images/${product.images}`} alt={product.name} className="product-image" />
                                            </td>
                                            <td>{formatCurrency(product.price)}</td>
                                            <td>
                                                <div className="productDetail-quantity d-flex">
                                                    <div className="productDetail-quantity-number d-flex justify-content-center">
                                                        <p id="quantity">{product.quantity}</p>
                                                        <div className="productDetail-quantity-content">
                                                            <div className="productDetail-quantity-up" onClick={() => dispatch(increaseQuantity(product.id))}>
                                                                <i className="fa-solid fa-angle-up" ></i>
                                                            </div>
                                                            <div className="productDetail-quantity-down" onClick={() => dispatch(decreaseQuantity(product.id))}>
                                                                <i className="fa-solid fa-angle-down"></i>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td style={{ fontSize: '0.9rem' }}>{formatCurrency(product.price * product.quantity)}</td>
                                            <td>
                                                <button onClick={() => dispatch(removeFromCart(product.id))} className='cart-button-delete pe-4 ps-4 pt-2 pb-2'>Xóa</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot >
                                    <tr>
                                        <td colSpan={4} className='total-label'>
                                            Tổng cộng:
                                        </td>
                                        <td style={{width:'120px'}}>
                                            {formatCurrency(totalAmount)}
                                        </td>
                                        <td>
                                            <Link to="/cartcheckout">
                                                <button className='cart-thanhtoan'>Thanh toán</button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>


                            {/* <div className="cart-info">
                                <div className="cart-info-title">
                                    <h1>Thông tin nhận hàng</h1>
                                </div>
                                <div className="row g-3">
                                    <div className="col">
                                        <div className="cart-info-box">
                                            <div className="cart-info-content">
                                                <div className="cart-info-content-box">
                                                    <div className="cart-info-title">
                                                        <p>Họ và tên*</p>
                                                    </div>
                                                    <div className="cart-info-input">
                                                        <input type="text" placeholder='Nhập họ tên người mua...' />
                                                    </div>
                                                </div>
                                                <div className="cart-info-content-box">
                                                    <div className="cart-info-title">
                                                        <p>Số điện thoại*</p>
                                                    </div>
                                                    <div className="cart-info-input">
                                                        <input type="text" placeholder='Nhập họ tên người mua...' />
                                                    </div>
                                                </div>
                                                <div className="cart-info-content-box">
                                                    <div className="cart-info-title">
                                                        <p>Địa chỉ nhận hàng*</p>
                                                    </div>
                                                    <div className="cart-info-input">
                                                        <input type="text" placeholder='Nhập họ tên người mua...' />
                                                    </div>
                                                </div>
                                                <div className="cart-info-content-box">
                                                    <div className="cart-info-title">
                                                        <p>Ghi chú*</p>
                                                    </div>
                                                    <div className="cart-info-input">
                                                        <textarea type="text" placeholder='Nhập họ tên người mua...' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="cart-check">
                                            <div className="cart-checkt-title text-center mt-3">
                                                <h4>Kiểm tra lại sản phẩm</h4>
                                            </div>
                                            <div className="cart-check-content">
                                                <div className="cart-check-table">
                                                    <table className='w-100'>
                                                        <thead>
                                                            <tr>
                                                                <th>Sản phẩm</th>
                                                                <th>Giá tiền</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {cartItems.map((item) => (
                                                                <tr key={item.id}>
                                                                    <td>
                                                                        <img src={`/images/${item.images}`} alt={item.name} />
                                                                    </td>
                                                                    <td>{formatCurrency(item.price)}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="cart-checkt-title text-center mt-5">
                                                <h4>Thanh toán</h4>
                                            </div>

                                            <div className="cart-check-money">
                                                <div className="cart-check-heading">
                                                    <div className="cart-check-total-title">
                                                        <span>Tổng cộng:</span>
                                                    </div>
                                                    <div className="cart-checkt-total-price">
                                                        {formatCurrency(totalAmount)}
                                                    </div>
                                                </div>
                                                <div className="cart-check-middle d-flex justify-content-between">
                                                    <div className="cart-check-total-title">
                                                        <span>Tiền Ship:</span>
                                                    </div>
                                                    <div className="cart-check-total-price">
                                                        <p>Đồng giá: <strong>30,000đ</strong></p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="cart-check-button mt-5 d-flex justify-content-center">
                                                <button>Thanh toán</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div> */}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
