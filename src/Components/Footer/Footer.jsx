import './Footer.css'

export const Footer = () =>{
    return (
        <footer>
            <div className="footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-widget d-flex justify-content-between">
                            <div className="footer-top-title">
                                <h2>Đăng ký để nhận tin tức mới</h2>
                            </div>
                            <div className="footer-top-follow">
                                <div className="footer-follow-title">
                                    <h4>Theo dõi chúng tôi:</h4>
                                </div>
                                <div className="footer-follow-img">
                                    <a href="#">
                                        <i className="fa-brands fa-facebook" style={{ color: 'rgb(172, 172, 172)' }}></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-instagram" style={{ color: 'rgb(172, 172, 172)' }}></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-twitter" style={{ color: 'rgb(172, 172, 172)' }}></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-youtube" style={{ color: 'rgb(172, 172, 172)' }}></i>
                                    </a>
                                    <a href="#">
                                        <i className="fa-brands fa-linkedin" style={{ color: 'rgb(172, 172, 172)' }}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-header">
                        <div className="footer-widget">
                            <div className="row">
                                <div className="col">
                                    <div className="footer-title">
                                        <h3>Chính sách bảo mật</h3>
                                    </div>
                                    <div className="footer-ul">
                                        <ul>
                                            <li><a href="#">Hoàn trả</a></li>
                                            <li><a href="#">Điều khoản thanh toán</a></li>
                                            <li><a href="#">Điều khoản giao hàng</a></li>
                                            <li><a href="#">Thanh toán và định giá</a></li>
                                            <li><a href="#">Điều khoản sử dụng</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="footer-title">
                                        <h3>Tham gia ngay</h3>
                                    </div>
                                    <div className="footer-ul">
                                        <ul>
                                            <li><a href="#">Về chúng tôi</a></li>
                                            <li><a href="#">Tầm nhìn của chúng tôi</a></li>
                                            <li><a href="#">Đặt và giao hàng</a></li>
                                            <li><a href="#">Văn phòng phẩm</a></li>
                                            <li><a href="#">Liên hệ chúng tôi</a></li>
                                            <li><a href="#">Dịch vụ khách hàng</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="footer-title">
                                        <h3>Link nhanh chóng</h3>
                                    </div>
                                    <div className="footer-ul">
                                        <ul>
                                            <li><a href="#">Laptop</a></li>
                                            <li><a href="#">Screen</a></li>
                                            <li><a href="#">Headphone</a></li>
                                            <li><a href="#">Mouse</a></li>
                                            <li><a href="#">Keyboard</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="footer-title">
                                        <h3>Chăm sóc khách hàng</h3>
                                    </div>
                                    <div className="footer-ul">
                                        <ul>
                                            <li><a href="#">Tài khoản</a></li>
                                            <li><a href="#">Vị trí cửa hàng</a></li>
                                            <li><a href="#">Hoàn trả</a></li>
                                            <li><a href="#">Hỗ trợ sản phẩm</a></li>
                                            <li><a href="#">FAQs</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-mid">
                        <div className="footer-widget">
                            <div className="row">
                                <div className="col">
                                    <h1>Gearshop</h1>
                                </div>
                                <div className="col d-flex">
                                    <div className="footer-mid-img">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M481.33-40v-66.67h292V-156h-152v-304h152v-58.67Q773.33-640 688-727q-85.33-87-206.67-87-121.33 0-208 87-86.66 87-86.66 208.33V-460h152v304h-152q-27 0-46.84-19.83Q120-195.67 120-222.67v-296q0-74.49 28.5-140.42Q177-725.02 226-774.34q49-49.33 114.97-77.83t140.5-28.5q74.53 0 140.03 28.5t113.87 77.83q48.37 49.32 76.5 115.25Q840-593.16 840-518.67v412q0 27-19.83 46.84Q800.33-40 773.33-40h-292ZM186.67-222.67H272v-170.66h-85.33v170.66Zm501.33 0h85.33v-170.66H688v170.66ZM186.67-393.33H272h-85.33Zm501.33 0h85.33H688Z"/></svg>
                                    </div>
                                    <div className="footer-mid-text">
                                        <p>+0080 1234 56 789</p>
                                    </div>
                                </div>
                                <div className="col d-flex">
                                    <div className="footer-mid-img">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M229.41-160.67q-49.41 0-84.08-34.61-34.66-34.61-34.66-84.05H40v-454q0-27 19.83-46.84Q79.67-800 106.67-800h572.66v164.67h110l130.67 174v182h-74q0 49.44-34.59 84.05t-84 34.61q-49.41 0-84.08-34.61-34.66-34.61-34.66-84.05H348q0 49.33-34.59 84-34.59 34.66-84 34.66Zm-.08-66.66q21.67 0 36.84-15.17 15.16-15.17 15.16-36.83 0-21.67-15.16-36.84-15.17-15.16-36.84-15.16-21.66 0-36.83 15.16-15.17 15.17-15.17 36.84 0 21.66 15.17 36.83 15.17 15.17 36.83 15.17ZM106.67-346H132q17-24 41.69-38.33 24.7-14.34 55-14.34Q259-398.67 284-384q25 14.67 42 38h286.67v-387.33h-506V-346Zm620.66 118.67q21.67 0 36.84-15.17 15.16-15.17 15.16-36.83 0-21.67-15.16-36.84-15.17-15.16-36.84-15.16-21.66 0-36.83 15.16-15.17 15.17-15.17 36.84 0 21.66 15.17 36.83 15.17 15.17 36.83 15.17Zm-48-202.67H860L756-568.67h-76.67V-430ZM360-532.67Z"/></svg>
                                    </div>
                                    <div className="footer-mid-text">
                                        <p>Số tiền trên 300.000đ</p>
                                    </div>
                                </div>
                                <div className="col d-flex">
                                    <div className="footer-mid-img">
                                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#FFFFFF"><path d="M546.67-426.67q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-293.33q-27.5 0-47.08-19.59-19.59-19.58-19.59-47.08H40v-454q0-27 19.83-46.84Q79.67-800 106.67-800h572.66v164.67h110l130.67 174v182h-74q0 49.44-34.59 84.05t-84 34.61q-49.41 0-84.08-34.61-34.66-34.61-34.66-84.05H348q0 49.33-34.59 84-34.59 34.66-84 34.66Zm-.08-66.66q21.67 0 36.84-15.17 15.16-15.17 15.16-36.83 0-21.67-15.16-36.84-15.17-15.16-36.84-15.16-21.66 0-36.83 15.16-15.17 15.17-15.17 36.84 0 21.66 15.17 36.83 15.17 15.17 36.83 15.17ZM106.67-346H132q17-24 41.69-38.33 24.7-14.34 55-14.34Q259-398.67 284-384q25 14.67 42 38h286.67v-387.33h-506V-346Zm620.66 118.67q21.67 0 36.84-15.17 15.16-15.17 15.16-36.83 0-21.67-15.16-36.84-15.17-15.16-36.84-15.16-21.66 0-36.83 15.16-15.17 15.17-15.17 36.84 0 21.66 15.17 36.83 15.17 15.17 36.83 15.17Zm-48-202.67H860L756-568.67h-76.67V-430ZM360-532.67Z"/></svg>
                                    </div>
                                    <div className="footer-mid-text">
                                        <p>Tiết kiệm lên đến 20%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom">
                            <div className="footer-widget d-flex justify-content-between">
                                <div className="footer-left">
                                    <p>@2024 By Lam Chan Toan</p>
                                </div>
                                <div className="footer-right">
                                    <div className="footer-right-img">
                                        <img src="/images/footer-payment1.png" alt="Footer Payment" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}