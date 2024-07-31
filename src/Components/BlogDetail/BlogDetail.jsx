import './BlogDetail.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';


export const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlogs] = useState([null]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const reponse = await axios.get(`http://localhost:5000/blog/${id}`)
                setBlogs(reponse.data)
            } catch (error) {
                console.log('Lỗi fetch tin tức', error)
            }
        };

        fetchBlogs();
    }, [id])

    return (
        <>
            <div className="blogDetail">
                <div className="blogDetail">
                    <div className="container">
                        <div className="blogDetail-widget">
                            <div className="row">
                                <div className="col-8">
                                    <div className="blogDetail-left">
                                        <div className="smallHead">
                                            <div className="smallHead-widget">
                                                <a href="/">Home </a>
                                                <a href="/blog">Blog </a>
                                                <span>Blog Detail</span>
                                            </div>
                                        </div>
                                        <div className="blogDetail-date">
                                            <p>{blog.date}</p>
                                        </div>
                                        <div className="blogDetail-title">
                                            <h2>
                                                {blog.name}
                                            </h2>
                                        </div>
                                       
                                        <div className="blogDetail-img">
                                            <img src={`/images/${blog.images}`} alt="" />
                                        </div>
                                        <div className="blogDetail-content">
                                            <div className="blogDetail-content-heading">
                                                <h5>
                                                    {blog.text}
                                                </h5>
                                            </div>
                                            <div className="blogDetail-content-bottom">
                                                <div className="blogDetail-content-text">
                                                    <p>
                                                        {blog.textheading}
                                                    </p>
                                                </div>
                                                <div className="blogDetail-content-img">
                                                    <div className="relatedImages">
                                                        {Array.isArray(blog.relatedimages) && blog.relatedimages.slice(0, 4).map((image, index) => (
                                                            <img 
                                                                key={index} 
                                                                src={`/images/${image}`} 
                                                                alt={`Related ${index + 1}`} 
                                                                className="relatedImage"
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                                <div className="blogDetail-content-moretext">
                                                    <p>
                                                       {blog.moretext}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                                <img src="/images/prodBlog5.jpg" alt="" />
                                                <img src="/images/prodBlog6.jpg" alt="" />
                                                <img src="/images/prodBlog2.jpg" alt="" />
                                                <img src="/images/prodBlog7.jpg" alt="" />
                                                <img src="/images/prodBlog1.jpg" alt="" />
                                                <img src="/images/prodBlog8.jpg" alt="" />
                                            </div>
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