import React from "react";
import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./Blogs.css";

export const Blogs = () => {
  const navigate = useNavigate();
  const blogRef = useRef();
  // const [blogItem, setBlogItem] = useState([]);
  const [blog, setBlogs] = useState({ title: "", description: "", category: "" });
  const [formError, setFormError] = useState(false);

  const handleOnChange = (e) => {
    setBlogs({ ...blog, [e.target.name]: e.target.value });
  }

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    try {
      if (
        blog.title.trim().length === 0 ||
        blog.description.trim().length === 0 ||
        blog.category.trim().length === 0
      ) {
        setFormError(true);
        return;
      }
    } catch (error) {
      console.log("Please enter value in all field ");
      setFormError(true)
    }
    setFormError(false);
    const token = localStorage.getItem("accessToken");
    axios
      .post(
        "http://localhost:3001/api/blogs", blog, {
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${token}`,
        },
      }
      )
      .then((response) => {
        if (response.data.success) {
          // const blog = response.data.data.blog;
          setBlogs({ title: "", description: "", category: "" });
          navigate("/AllBlogs");
        }
      })
      .catch((error) => {
        setFormError(true);
      });
  };

  // const updateBlogItemData = (e) => {
  //   setBlogItem(e.target.value);
  // };


  // const handleBlogDelete = (blogId) => {
  //   const token = localStorage.getItem("accessToken");
  //   axios
  //     .delete(`http://localhost:3001/api/blogs/${blogId}`, {
  //       headers: {
  //         authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       if (response.data.success) {
  //         const filteredBlogs = blog.filter(({ _id }) => _id !== blogId);
  //         setBlogs(filteredBlogs);
  //       }
  //     })
  //     .catch((error) => console.error(error));
  // };

  // useEffect(() => {
  //   const token = localStorage.getItem("accessToken");
  //   axios
  //     .get("http://localhost:3001/api/blogs", {
  //       headers: {
  //         authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then((response) => {
  //       const blogs = response.data.data.blogs;
  //       // console.log(blogs);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div className="blogs">
      <div className="blogs__header">
        <h1 className="page-title">Blogs</h1>
      </div>
      {/* <div className="blogs__body">
        <BlogList blogs={blog} handleBlogDelete={handleBlogDelete} />
      </div> */}
      <div className="blogs__footer">
        <form
          className="blog-form spaced-form"
          onSubmit={handleBlogSubmit}
          ref={blogRef}
        >
          <h4 className="text-center page-title">Add your Thougth</h4>
          <div className="input-group">
            <label htmlFor="title">Your Blog name</label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Write here good blog name"
              className="input-control"
              value={blog.title}
              onChange={handleOnChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="description">Write your Blog</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Let's start ..."
              className="input-control"
              value={blog.description}
              onChange={handleOnChange}
            />
          </div>
          <div className="input-group">
            <label htmlFor="category">What Kind of your Blog !</label>
            <input
              type="text"
              name="category"
              id="category"
              placeholder="Mention little bit"
              className="input-control"
              value={blog.category}
              onChange={handleOnChange}
            />
          </div>
          <div className="input-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
      {formError ? (
        <div className="alert alert-danger">
          <p className="alert-message">
            All Fields madentory.<br /> Please verify once !
          </p>
        </div>
      ) : null}
    </div>
  );
};
