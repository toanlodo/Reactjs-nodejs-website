import './UserAccount.css'
import { useState, useEffect } from 'react';

export const UserAccount = () =>{

    const [user,setUser] = useState({
        fullname: '',
        phone:'',
        username:'',
        email:'',
        password:'',
        address:'',
    });

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            setUser(userData);
        }
    }, []);

    const change = (e)=>{
        const {name,value} = e.target;
        setUser({
            ...user,
            [name]:value
        });
    }

    const submit = async (e) => {
        e.preventDefault();
        try{
            const reponse = await fetch(`http://localhost:5000/user/${user.username}`,{
                method:'PUT',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(user)
            });
            const data = await reponse.json();
            if(reponse.ok){
                localStorage.setItem('user', JSON.stringify(data.user));
                alert(data.message);
            }else{
                alert(data.message);
            }
        }catch(error){
            console.log('Error fetching user:',error)
            alert('error fetching')
        }
    };

    return (
        <div className="useraccount">
            <div className="container">
                <div className="useraccount-box">
                    <div className="row">
                        <div className="col-4 tnr">
                            <div className="useraccount-box-left-title">
                                <span>User Profile</span>
                            </div>
                            <div className="useraccount-box-left-content d-flex align-items-center justify-content-start">
                                <i className="fa-regular fa-circle-user fa-lg" style={{ color: "#000000" }}></i>
                                <p className='d-flex justify-content-center align-items-center' style={{fontWeight:'600'}}>Thông tin</p>
                            </div>
                            <div className="useraccount-box-left-content d-flex align-items-center justify-content-start">
                                <i className="fa-regular fa-heart fa-lg" style={{color:'#dedede'}}></i> 
                                <p className='d-flex justify-content-center align-items-center' style={{color:'#dededed'}}>Yêu thích</p>
                            </div>
                            <div className="useraccount-box-left-content d-flex align-items-center justify-content-start">
                                <i className="fa-solid fa-cart-shopping" style={{color:'#dedede'}}></i>                              
                                <p className='d-flex justify-content-center align-items-center' style={{color:'#dededed'}}>Đơn hàng</p>

                            </div>
                        </div>
                        <div className="col-8">
                            <div className="useraccount-box-right">
                                <div className="useraccount-box-right-content">
                                    <div className="useraccount-box-right-content-title d-flex justify-content-center mb-3">
                                        <h3>Thông tin của bạn</h3>
                                    </div>
                                    <div className="useraccount-box-right-content-form">
                                        <form onSubmit={submit}>
                                            <div className="useraccount-box-right-content-form-box d-flex justify-content-between">
                                                <div className="useraccount-box-right-content-form-box-input">
                                                    <label htmlFor="fullname">Họ và tên:</label>
                                                    <br />
                                                    <input
                                                        type="text"
                                                        name="fullname"
                                                        value={user.fullname}
                                                        onChange={change}
                                                    />
                                                </div>
                                                <div className="useraccount-box-right-content-form-box-input">
                                                    <label htmlFor="phone">Số điện thoại:</label>
                                                    <br />
                                                    <input
                                                        type="text"
                                                        name="phone"
                                                        value={user.phone}
                                                        onChange={change}
                                                    />
                                                </div>
                                            </div>
                                            <div className="useraccount-box-right-content-form-box d-flex">
                                                <div className="useraccount-box-right-content-form-box-input">
                                                    <label htmlFor="username">Tên tài khoản:</label>
                                                    <br />
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        value={user.username}
                                                        onChange={change}
                                                        disabled
                                                    />
                                                </div>
                                                <div className="useraccount-box-right-content-form-box-input">
                                                    <label htmlFor="password">Mật khẩu:</label>
                                                    <br />
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        value={user.password}
                                                        onChange={change}
                                                    />
                                                </div>
                                            </div>
                                            <div className="useraccount-box-right-content-form-box d-flex">
                                                <div className="useraccount-box-right-content-form-box-input">
                                                    <label htmlFor="email">Email:</label>
                                                    <br />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={user.email}
                                                        onChange={change}
                                                    />
                                                </div>
                                                <div className="useraccount-box-right-content-form-box-input">
                                                    <label htmlFor="address">Địa chỉ:</label>
                                                    <br />
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        value={user.address}
                                                        onChange={change}
                                                    />
                                                </div>
                                            </div>
                                            <div className="useraccount-box-right-button d-flex justify-content-center">
                                                <button type="submit">Lưu thay đổi</button>
                                            </div>
                                        </form>
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