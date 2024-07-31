import './Store.css'

export const Store = () => {
    return (
        <>
            <div className="store">
                <div className="container">
                    <div className="smallHead">
                        <div className="smallHead-widget">
                            <a href="/">Home </a>
                            <span>store</span>
                        </div>
                    </div>
                    <div className="store-box">
                        <div className="store-box-title">
                            <h5>Hệ thống cửa hàng</h5>
                        </div>
                        <div className="store-box-text">
                            <p>
                                <span>Địa chỉ:</span> 52 Trần Minh Quyền, P11, Q.10, TP.HCM
                            </p>
                            <p>
                                <span>Hotline:</span> 0.888.000.112 – 0.889.575.775
                            </p>
                            <p>
                                <span>Thời gian mở cửa:</span> 10h00 – 19h00
                            </p>
                        </div>
                        <div className="store-box-content">
                            <p>
                                Với kinh nghiệm trên 10 năm mua bán, chúng tôi cam đoan mang đến những
                                sản phẩm chất lượng đến cho khách hàng. Chữ tín đặt lên trên đầu và sẽ
                                cố gắng phục vụ khách hàng một cách tận tâm nhất.
                            </p>
                            <p>
                                Mọi thông tin, góp ý hay khiếu nại vui lòng liên hệ qua email:{" "}
                                <a href="">Gearshopchannel@gmail.com</a>
                            </p>
                        </div>
                        <div className="store-box-img">
                            <div className="row g-1">
                                <div className="col-8">
                                    <img src="images/store1.png" alt="" />
                                </div>
                                <div className="col-4">
                                    <img src="images/store2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}