import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'

export const Login = () => {

    const [username,setUsername]= useState('');
    const [password,setPassword] = useState('');
    const [error,setError]= useState('');
    const navigate = useNavigate(); 

    const Login = async(e)=>{
        e.preventDefault();

        try{
            const response = await fetch('http://localhost:5000/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body: JSON.stringify({username,password}),
            });
            
            const data = await response.json();
            if (response.ok) {
                alert('Đăng nhập thành công');
                localStorage.setItem('user',JSON.stringify(data.user))
                navigate('/');
                window.location.reload();

            } else{
                setError(data.message);
            }
        }catch(error){
            setError('Lỗi kết nối')
        }
    }

    return (
        <>
        
            <div className="login">
                <div className="container">
                    <div className="login-box">
                        <div className="login-left">
                            <div className="login-left-img">
                                <img src="./images/prodBlog6.jpg" alt="" />
                            </div>
                        </div>
                        <div className="login-right">
                            <div className="login-right-title">
                                <h2>Đăng nhập</h2>
                                <p>Hãy đăng nhập để được hưởng đặc quyền riêng dành cho bạn</p>
                            </div>
                            <form className="form" onSubmit={Login} id="loginForm">
                                <div className="login-right-input">
                                    <div className="login-right-input-nickname">
                                        <h2>
                                            Tài khoản <span>*</span>
                                        </h2>
                                        <input type="text" name="username" id="username" placeholder="Nhập tài khoản ..." value={username} onChange={(e)=> setUsername(e.target.value)} required />
                                    </div>
                                    <div className="login-right-input-password">
                                        <h2>
                                            Mật khẩu<span>*</span>
                                        </h2>
                                        <input type="password" name="password" id="password" placeholder="Nhập mật khẩu ..." value={password} onChange={(e)=> setPassword(e.target.value)} required />
                                    </div>
                                    <div className="register-right-button">
                                        <button id="loginButton" type="submit">
                                            Đăng nhập
                                        </button>
                                    </div>
                                </div>
                                {error && <p style={{color:'red'}}>{error}</p>}
                                <div className="login-right-policy">
                                    <input type="checkbox" id="remember" />{" "}
                                    <label htmlFor="remember">Lưu tài khoản</label>
                                </div>
                            </form>
                            <div className="login-right-or">
                                <a href="forgetpass.html">
                                    <p>Quên mật khẩu?</p>
                                </a>
                            </div>
                            <div className="login-right-button-facebook">
                                <button type="submit" className="login-facebook">
                                    <img src="./images/facebookregister.png" alt="" />
                                    <p>Đăng nhập bằng <span>Facebook</span></p>
                                </button>
                            </div>
                            <div className="login-right-if">
                                <p>Bạn chưa có tài khoản Gearshop?</p>
                                <Link to="/signup">
                                    Đăng ký
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}