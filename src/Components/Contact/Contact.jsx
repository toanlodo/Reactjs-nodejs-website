import './Contact.css'

export const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="container">
                    <div className="smallHead">
                        <div className="smallHead-widget">
                            <a href="/">Home </a>
                            <span>Contact</span>
                        </div>
                    </div>
                    <div className="contact-box">
                        <div className="row">
                            <div className="col">
                                <div className="contact-box-left">
                                    <div className="contact-box-left-heading">
                                        <div className="contact-box-left-heading-title">
                                            <h3>Liên hệ</h3>
                                        </div>
                                        <div className="contact-box-left-heading-text">
                                            <p>Mọi chi tiết liên hệ thông tin chúng tôi</p>
                                        </div>
                                    </div>
                                    <div className="contact-box-left-bottom">
                                        <div className="contact-box-left-bottom-title">
                                            <p>
                                                Mọi chi tiết xin liên hệ với chúng tôi. Chúng tôi sẵn sàng hỗ
                                                trợ các bạn.{" "}
                                            </p>
                                        </div>
                                        <div className="contact-box-left-bottom-text">
                                            <p>
                                                Hotline : <span>0889 575 775 - 0888 000 112</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="contact-box-left-bottom-form">
                                        <form action="">
                                            <div className="contact-box-left-bottom-form-name">
                                                <div className="contact-box-left-bottom-form-name-flex d-flex">
                                                    <div className="contact-box-form-flex-content">
                                                        <div className="contact-box-form-flex-content-span">
                                                            <span>Họ &amp; Tên*</span>
                                                        </div>
                                                        <div className="contact-box-form-flex-content-input">
                                                            <input type="text" placeholder="Nhập họ tên..." />
                                                        </div>
                                                    </div>
                                                    <div className="contact-box-form-flex-content">
                                                        <div className="contact-box-form-flex-content-span">
                                                            <span>Số điện thoại*</span>
                                                        </div>
                                                        <div className="contact-box-form-flex-content-input">
                                                            <input type="text" placeholder="Nhập sđt..." />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="contact-box-left-bottom-form-email">
                                                <div className="contact-box-form-content-span">
                                                    <span>Email*</span>
                                                </div>
                                                <div className="contact-box-form-content-input">
                                                    <input type="text" placeholder="Nhập email..." />
                                                </div>
                                            </div>
                                            <div className="contact-box-left-bottom-form-content">
                                                <div className="contact-box-form-content-span">
                                                    <span>Nội dung*</span>
                                                </div>
                                                <div className="contact-box-form-content-input">
                                                    <textarea
                                                        name=""
                                                        id=""
                                                        placeholder="Nhập nội dung..."
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                            <div className="contact-box-left-bottom-form-button">
                                                <button>Gửi</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="contact-box-right">
                                    <div className="contact-box-right-map">
                                        <iframe
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.45450654059!2d106.62420897485805!3d10.852993989300504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752bee0b0ef9e5%3A0x5b4da59e47aa97a8!2zQ8O0bmcgVmnDqm4gUGjhuqduIE3hu4FtIFF1YW5nIFRydW5n!5e0!3m2!1svi!2s!4v1721802333749!5m2!1svi!2s"
                                            width="100%"
                                            height={350}
                                            style={{ border: 0 }}
                                            allowFullScreen=""
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                        />
                                    </div>
                                    <div className="contact-box-right-title">
                                        <h4>Địa chỉ công ty</h4>
                                    </div>
                                    <div className="contact-box-right-text">
                                        <p>Công ty TNHH Một Thành Viên Đồ Chơi Công Nghệ Việt Nam</p>
                                        <p>52 Trần Minh Quyền, Phường 11, Quận 10, Tp Hồ Chí Minh</p>
                                        <p>
                                            Email: <a href="">Gearshopchannel@gmail.com</a>
                                        </p>
                                        <p>Website: www.gearshop.vn</p>
                                    </div>
                                    <div className="contact-box-right-time">
                                        <div className="contact-box-right-time-span">
                                            <span>Giờ mở cửa</span>
                                        </div>
                                        <div className="contact-box-right-time-text">
                                            <p>Thứ 2 - Thứ 7: 9h30 - 20h30</p>
                                            <p>Chủ nhật: 9h30 - 17h30x</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}