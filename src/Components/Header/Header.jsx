import { useSelector } from 'react-redux';
import { selectCartItemsCount } from '../../Features/cart/cartslide';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css'
import { useEffect, useState } from 'react';
export const Header = () => {
    
    const cartItemsCount = useSelector(selectCartItemsCount);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }

    }, []);

    const Logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/');
    }
    return (
        <header>
            <nav className="navbar navbar-expand-lg">
                <div className="container d-flex">
                    <a className="navbar-brand" href="#">
                        <img src="/images/newlogo.png" alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center w-100 open-sans" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page">Trang chủ</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/products" className="nav-link" aria-expanded="true">Shop</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/blog" className="nav-link" aria-expanded="true">Tin tức</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/store" className="nav-link" aria-expanded="true">Hệ thống cửa hàng</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link" aria-expanded="true">Liên hệ</Link>
                            </li>
                            <li className="nav-item dropdown">
                                {user ? (
                                    <>
                                        <span className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Xin chào, {user.username}
                                        </span>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link to="/useraccount" className='dropdown-item'>
                                                    Thông tin tài khoản
                                                </Link>
                                            </li>
                                            <li>
                                                <button className='dropdown-item' onClick={Logout}>
                                                    Đăng xuất
                                                </button>
                                            </li>
                                        </ul>
                                    </>

                                ) : (
                                    <>
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tài khoản</a>
                                        <ul className="dropdown-menu">
                                            <li>
                                                <Link to="/login" className='dropdown-item'>
                                                    Đăng nhập
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/signup" className='dropdown-item'>
                                                    Đăng ký
                                                </Link>
                                            </li>
                                        </ul>
                                    </>
                                )}

                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <div className="navbar-search d-flex justify-content-between">
                            <div className="navbar-search-input">
                                <form className="d-flex justify-content-center border-0" role="search">
                                    <input className="" type="search"
                                        placeholder="Nội dung tìm kiếm" aria-label="Search" />
                                    <button type="submit" className='border-0 '>
                                        <img src="/images/Search.svg" className="align-items-center" alt="Search Icon" />
                                    </button>
                                </form>
                            </div>
                            <div className="navbar-login-addtocart" >
                                <div className="navbar-addtocart d-flex justify-content-end">
                                    <div className="cart-header nav-item ">
                                        <Link to="/cart" className='nav-link d-flex w-100' aria-expanded="true">
                                            <div className="cart-img">
                                                <img src="/images/Cart.svg" alt="Cart Icon" />
                                            </div>

                                            <div className="cart-quantity">
                                                <div className="cart-quantity-number">
                                                    {cartItemsCount > 0 && <p className='cart-count'>{cartItemsCount}</p>}
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
