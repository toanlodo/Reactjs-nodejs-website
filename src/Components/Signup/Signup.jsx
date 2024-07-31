import { Link, useNavigate } from 'react-router-dom'
import './Signup.css'
import { useState } from 'react'

export const Signup = () => {
    const [email,setEmail]=useState('');
    const [username,setUsername]=useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate(); 
    const [error, setError] = useState('');

    const Register = async(e)=>{
        e.preventDefault();

        if(username.length<6){
            setError('Tài khoản phải nhiều hơn 6 ký tự');
            return;
        }
        if(password !=confirmPassword){
            setError('Mật khẩu không khớp');
            return;
        }
        if(password.length<6){
            setError('Mật khẩu phải nhiều hơn 6 ký tự')
            return;
        }
        try{
            const reponse = await fetch('http://localhost:5000/register',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({username,email,password}),
            });
            const data = await reponse.json();
            if(reponse.ok){
                alert('Đăng ký thành công');
                navigate('/login')
            }else{
                setError(data.message)
            }
        }catch(error){
            setError('Lỗi kết nối')
        }
    };

    return (
        <>
            <div className="register">
                <div className="container">
                    <div className="register-box">
                        <div className="register-left">
                            <div className="register-left-img">
                                <img src="/images/prodBlog8.jpg" alt="" />
                            </div>
                        </div>
                        <div className="register-right">
                            <div className="register-right-title">
                                <h2>Đăng ký tài khoản</h2>
                                <p>Hãy đăng ký để được hưởng nhiều đặc quyền riêng dành cho bạn</p>
                            </div>
                            <div className="register-right-input">
                            <form className="form" onSubmit={Register} id="registerForm">
                                <div className="register-right-input-nickname">
                                    <input type="email" id="email" placeholder="Nhập email ..." value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                                <div className="register-right-input-nickname">
                                    <input type="text" id="name" placeholder="Nhập tên tài khoản ..." value={username} onChange={(e) => setUsername(e.target.value)} required />
                                </div>
                                <div className="register-right-input-password">
                                    <input type="password" id="password" placeholder="Nhập mật khẩu ..." value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </div>
                                <div className="register-right-input-confirmpassword">
                                    <input type="password" id="confirmPassword" placeholder="Nhập lại mật khẩu ..." value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                                </div>
                                <div className="register-right-button">
                                    <input id="registerButton" type="submit" value="Đăng ký ngay" />
                                </div>
                            </form>
                            {error && <p style={{ color: 'red' }}>{error}</p>}
                        </div>
                            <div className="register-right-policy">
                                <p>
                                    Thông tin của bạn sẽ được bảo mật theo{" "}
                                    <span>
                                        <a href="">chính sách riêng tư</a>{" "}
                                    </span>{" "}
                                    của chúng tôi
                                </p>
                            </div>
                            <div className="register-right-or">
                                <p>Hoặc</p>
                            </div>
                            <div className="register-right-button-facebook">
                                <button type="submit" className="register-facebook">
                                    <img src="images/facebookregister.png" alt="" />
                                    <p>
                                        {" "}
                                        Đăng nhập bằng <span>Facebook</span>{" "}
                                    </p>
                                </button>
                            </div>
                            <div className="register-right-if">
                                <p>Bạn đã có tài khoản Gearshop?</p>
                                <Link to="/login">
                                    Đăng nhập
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}