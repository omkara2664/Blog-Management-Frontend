import React from 'react';
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
import "./BlogEdit.css";

export const BlogEdit = () => {
    const { id: blogId } = useParams();
    // console.log(blogId);
    const [blog, setBlog] = useState({ title: "", describe: '', category: "" });
    const navigate = useNavigate();
    const blogRef = useRef();

    // const [show, setShow] = useState(false);
    // const [formError, setFormError] = useState(false);
    // console.log(blog)

    useEffect(() => {
        const token = localStorage.getItem("accessToken");

        axios
            .get(`http://localhost:3001/api/blogs/${blogId}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                if (response.data.success) {
                    setBlog(response.data.data.blog);
                }

            })
            .catch((error) => {
                <p>May be User not Created Any blog till now ! </p>
                // setFormError(true)
            });
    }, [blogId]);


    const handelOnChange = (e) => {
        setBlog({ ...blog, [e.target.name]: e.target.value });
    };
    // console.log(blog);
    // console.log(blog.category);
    const handleBlogEdit = (e) => {
        e.preventDefault();

        if (blog.title.trim().length === 0) {
            console.error("Empty Blog not allowed.")
            return;
        }
        if (blog.description.trim().length === 0) {
            console.error("Empty Blog not allowed.")
            return;
        }
        if (blog.category.trim().length === 0) {
            console.error("Empty Blog not allowed.")
            return;
        }

        const token = localStorage.getItem('accessToken');
        axios.put(`http://localhost:3001/api/blogs/${blogId}`, blog, {
            headers: {
                authorization: `Bearer ${token}`
            },
        })
            .then((response) => {
                if (response.data.success) {
                    navigate("/AllBlogs");
                }
            })
            .catch((error) => console.error(error));
    };

    return (
        <div className='blogs blogs-edit'>
            <form className='blog-form spaced-edit-form' onSubmit={handleBlogEdit} ref={blogRef}>
                <div className='edit-box'>
                    <div className="edit-box-input">
                        <span>Title</span>
                        <input
                            className='edit-input'
                            placeholder='Enter Your Title Mr/Ms/Miss'
                            type="text"
                            name='title'
                            id='title'
                            value={blog.title || ''}
                            onChange={handelOnChange} />

                    </div>
                    <div className="edit-box-input">
                        <span className='details'>Description</span>
                        <input
                           className='edit-input'
                            placeholder='Enter Your description'
                            type="text"
                            name='description'
                            id='description'
                            value={blog.description || ''}
                            onChange={handelOnChange} />
                    </div>
                    <div className="edit-box-input">
                        <span className='details'>Category</span>
                        <input
                            className='edit-input       '
                            placeholder='Enter Your Category'
                            type="category"
                            name='category'
                            id='category'
                            value={blog.category || ''}
                            onChange={handelOnChange} />
                    </div>

                </div>
                <div className='but'>
                    <button className='btn btn-primary edit-btn'>
                        Update
                    </button>
                </div>
            </form>
            {/* <div className="blogs_footer">
                <form className='blog-form spaced-form'
                    onSubmit={(e) => handleBlogEdit(e)}
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

