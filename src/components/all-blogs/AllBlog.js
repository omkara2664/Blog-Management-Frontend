import React from 'react';
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../blogs/Blogs.css";

export const AllBlogs = () => {
    const [blog, setBlogs] = useState([]);
    const [show, setShow] = useState(false);
    const [formError, setFormError] = useState(false);
    const blogRef = useRef();
    const handleBlogSubmit = (e) => {
        e.preventDefault();
        // console.log("You on right way, this is all blog data")
    }


    useEffect(() => {
        const token = localStorage.getItem("accessToken");
        axios
            .get("http://localhost:3001/api/blogs", {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                const blogs = response.data.data.blogs;
                setBlogs(blogs)
                console.log(blogs)
            })
            .catch((error) => {
                // <P>May be User not Created Any blog till now ! </P>
                setFormError(true)
            });
    }, []);
    return (
        <div className='blogs'>
            <div className="blogs_header">
                <h1 className='page-title'>{!show ? "Let's go to your creation" : "This is your creation !"}</h1>
            </div>
            <div className="blogs_footer">
                <form className='blog-form spaced-form'
                    onSubmit={(e) => handleBlogSubmit(e)}
                    ref={blogRef}
                >
                    {show ?
                        <div className='input-group' >
                            {blog.map((blog) => (

                                <li key={blog._id}>
                                    <h3>{blog.title}</h3>
                                    <div>
                                        <h5>Category:{blog.category}</h5>
                                        <p>Description :{blog.description}</p>
                                    </div>
                                </li>
                            ))}
                            {formError ? (
                                <div className="alert alert-danger">
                                    <p className="alert-message">
                                        Sorry May be User not Created Any blog till now !
                                    </p>
                                </div>
                            ) : null}
                        </div>
                        : ""
                    }
                    <div className="input-group">
                        <button type='submit' className='btn btn-primary'
                            onClick={() => setShow(true)} hidden={show} >
                            Click Me !
                        </button>
                    </div>
                </form>
            </div>

        </div >
    )
}