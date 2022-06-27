import React from 'react';
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export const UpdateBlog = () => {

    const [blog, setBlogs] = useState([]);
    const [show, setShow] = useState(false);
    const [formError, setFormError] = useState(false);
    const blogRef = useRef();



    // const handleBlogSubmit = (e) => {
    //     e.preventDefault();
    //     // console.log("You on right way, this is all blog data")
    // }

    // useEffect(() => {
    //     const token = localStorage.getItem("accessToken");
    //     const id = "62b5f3368baf3f1b5dd8d1a5"
    //     axios
    //         .get(`http://localhost:3001/api/blogs/${id}`, {
    //             headers: {
    //                 authorization: `Bearer ${token}`,
    //             },
    //         })
    //         .then((response) => {
    //             const blogs = response.data.data.blogs;
    //             setBlogs(blogs)
    //             // console.log(blogs)
    //         })
    //         .catch((error) => {
    //             // <P>May be User not Created Any blog till now ! </P>
    //             setFormError(true)
    //         });
    // }, []);

    const handelOnSubmit = (e) => {
        e.preventDefault();
        console.log("I am handelOnSubmit");
    }
    const handelOnChange = (e) => {
        e.preventDefault();
        console.log("I am in handelOnChange")
    }

    return (
        <div className='blogs'>
            <div className="blogs_footer">
            </div>
            <form className='blog-form spaced-form' onSubmit={handelOnSubmit}>
                <div className='user-details'>
                    <div className="input-box">
                        <span className='details'>Enter Title </span>
                        <input
                            type="text"
                            placeholder='Enter Your Title Mr/Ms/Miss'
                            name='title'
                            className='title form-title size'
                            id='title'
                            value={blog.title}
                            onChange={handelOnChange} />
                    </div>
                    <div className="input-box">
                        <span className='details'>Enter Your description</span>
                        <input
                            type="text"
                            placeholder='Enter Your description'
                            name='description'
                            className='description form-description size'
                            id='description'
                            value={blog.description}
                            onChange={handelOnChange} />
                    </div>
                    <div className="input-box">
                        <span className='details'>Enter Your Category</span>
                        <input
                            type="Category"
                            placeholder='Enter Your Category'
                            name='Category'
                            className='Category form-Category size'
                            id='Category'
                            value={blog.Category}
                            onChange={handelOnChange} />
                    </div>

                </div>
                <div className='but'>
                    <button className='btn btn-primary'>
                        Update
                    </button>
                </div>
            </form>
            {/* <div className="blogs_footer">
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
                            All Blogs !
                        </button>
                    </div>
                </form> */}
            {/* </div> */}

        </div >
    )
}

