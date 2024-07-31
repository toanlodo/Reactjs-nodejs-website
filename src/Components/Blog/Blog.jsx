import './Blog.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const reponse = await axios.get('http://localhost:5000/blogs')
                setBlogs(reponse.data)
            } catch (error) {
                console.log('Lỗi fetch tin tức', error)
            }
        }

        fetchBlogs();
    }, [])

    return (
        <>

            <div className="blog">
                <div className="container">
                    <div className="blog-widget">
                        <div className="row g-5">
                            <div className="col-8">
                                <div className="smallHead">
                                    <div className="container">
                                        <div className="smallHead-widget">
                                            <a href="index.html">Home </a>
                                            <span>blog</span>
                                        </div>
                                    </div>
                                </div>
                                {blogs.map((blog) => (
                                    <div key={blog.id} className="blog-left">
                                        <div className="blog-box">
                                            <div className="blog-img">
                                                <Link to={`/blog/${blog.id}`}>
                                                    <img src={`./images/${blog.images}`} alt="" />
                                                </Link>
                                            </div>
                                            <div className="blog-content">
                                                <div className="blog-date">
                                                    <p>
                                                        {blog.date}
                                                    </p>
                                                </div>
                                                <div className="blog-title">
                                                    <Link to={`/blog/${blog.id}`}>
                                                        <h3>
                                                            {blog.name}
                                                        </h3>
                                                    </Link>
                                                </div>
                                                <div className="blog-text">
                                                    <p>
                                                        {blog.text}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="blog-btn">
                                                <Link to={`/blog/${blog.id}`}>
                                                    <button className="btn">Đọc thêm...</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>
                            <div className="col-4">
                                <div className="blog-right">
                                    <div className="blogTags">
                                        <div className="blogRight-title">
                                            <span>Tags</span>
                                        </div>
                                        <div className="blogTags-content ">
                                            <div className="blogTags-text">
                                                <a href="">
                                                    <p>Branding</p>
                                                </a>
                                                <a href="">
                                                    <p>Blog</p>
                                                </a>
                                                <a href="">
                                                    <p>Marketing</p>
                                                </a>
                                                <a href="">
                                                    <p>Tintuc</p>
                                                </a>
                                                <a href="">
                                                    <p>Docbao</p>
                                                </a>
                                                <a href="">
                                                    <p>Viral</p>
                                                </a>
                                                <a href="">
                                                    <p>Moinhat</p>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="blogFollow">
                                        <div className="blogRight-title">
                                            <span>Theo dõi chúng tôi tại:</span>
                                        </div>
                                        <div className="blogFollow-img">
                                            <a href="">
                                                <i
                                                    className="fa-brands fa-facebook"
                                                    style={{ color: "rgb(172, 172, 172)" }}
                                                />
                                            </a>
                                            <a href="">
                                                <i
                                                    className="fa-brands fa-instagram"
                                                    style={{ color: "rgb(172, 172, 172)" }}
                                                />
                                            </a>
                                            <a href="">
                                                <i
                                                    className="fa-brands fa-twitter"
                                                    style={{ color: "rgb(172, 172, 172)" }}
                                                />
                                            </a>
                                            <a href="">
                                                <i
                                                    className="fa-brands fa-youtube"
                                                    style={{ color: "rgb(172, 172, 172)" }}
                                                />
                                            </a>
                                            <a href="">
                                                <i
                                                    className="fa-brands fa-linkedin"
                                                    style={{ color: "rgb(172, 172, 172)" }}
                                                />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="blogImg">
                                        <div className="blogImg-img">
                                            <img src="images/prodBlog5.jpg" alt="" />
                                            <img src="images/prodBlog6.jpg" alt="" />
                                            <img src="images/prodBlog2.jpg" alt="" />
                                            <img src="images/prodBlog7.jpg" alt="" />
                                            <img src="images/prodBlog1.jpg" alt="" />
                                            <img src="images/prodBlog8.jpg" alt="" />
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