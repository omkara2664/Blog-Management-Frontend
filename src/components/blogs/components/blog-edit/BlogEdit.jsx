import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export const BlogEdit = () => {
  const navigate = useNavigate();
  const [blog, setBlog] = useState({ blog: "" });
  const { id: blogId } = useParams();

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
      .catch((error) => console.error(error));
  }, [blogId]);

  const handleBlogEdit = (e) => {
    e.preventDefault();
    if (blog.blog.trim().length === 0) {
      return;
    }
    const token = localStorage.getItem("accessToken");
    axios
      .put(`http://localhost:3001/api/blogs/${blog._id}`, blog, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        if (response.data.success) {
          navigate("/blogs");
        }
      })
      .catch((error) => console.error(error));
  };

  const handleOnChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  return (
    <form className="blog-form spaced-form" onSubmit={handleBlogEdit}>
      <div className="input-group">
        <label htmlFor="blog">What you want to do?</label>
        <input
          type="text"
          name="blog"
          id="blog"
          placeholder="What you want to do?"
          className="input-control"
          value={blog.blog}
          onChange={handleOnChange}
        />
      </div>
      <div className="input-group">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
};
