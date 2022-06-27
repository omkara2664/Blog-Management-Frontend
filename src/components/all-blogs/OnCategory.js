import React from 'react';
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../blogs/Blogs.css";
import { useNavigate } from 'react-router-dom';
import "./AllBlog.css"

export const OnCategory = () => {
    const [blog, setBlogs] = useState([]);
    const [value, setValue] = useState([]);
    const [show, setShow] = useState(false);
    const [formError, setFormError] = useState(false);
    const blogRef = useRef();
    const navigate = useNavigate();

    // const handleBlogSubmit = (e) => {
    //     e.preventDefault();
    //     const category = e.target.category.value;
    //     // setValue(category);
    //     // console.log(category)
    // }
    // console.log(value)
    const handleOnChange = (e) => {
        // e.preventDefault();
        e.preventDefault();
        const category = e.target.category.value;
        console.log(category)
        const token = localStorage.getItem("accessToken");
        axios
            .get(`http://localhost:3001/api/blogs/${category}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                const blogs = response.data.data.blogs;
                setBlogs(blogs)
                // console.log(blogs)
            })
            .catch((error) => {
                // <P>May be User not Created Any blog till now ! </P>
                setFormError(true)
            });
    };
    const atDeletePlace = (e) => {
        e.preventDefault();
        navigate("/AllBlogs");
    }

    return (
        <div className='blogs'>
            <div className="blogs_header">
                <h1 className='page-title'>{!show ? "Find on Category" : "Category Colliection!"}</h1>
            </div>
            <div className="blogs_footer">
                <form className='blog-form spaced-form'
                    onSubmit={(e) => handleOnChange(e)}

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
                                        Sorry Category not available !
                                    </p>
                                </div>
                            ) : null}
                        </div>
                        : ""
                    }
                    <input
                        type="text"
                        name="category"
                        placeholder="Enter Categoy"
                        className="input-control"
                    // onChange={(e) => handleOnChange(e)}   
                    />
                    <div className="input-group">
                        <button type='submit' className='btn btn-primary'
                            onClick={() => setShow(true)}
                        >
                            Search
                        </button>
                    </div>
                </form>
                <button className='btn btn-nav-delete'
                    onClick={atDeletePlace}
                >
                    Delete
                </button>
                <h6>go to All Blogs and Delete</h6>
            </div>

        </div >
    )
}



