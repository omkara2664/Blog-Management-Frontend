import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

export const BlogItem = ({ blog, onBlogDelete }) => {
  const handleBlogDelete = () => {
    onBlogDelete(blog._id);
  };
  return (
    <li
      key={blog._id}
      className={`blog-item ${blog.isCompleted ? "blog-item--completed" : ""}`}
    >
      <div className="blog-content">
        {blog.blog}
      </div>
      <div className="blog-action">
        <Link to={"/blogs/" + blog._id}>
          <FontAwesomeIcon icon={faPen} />
        </Link>
        <button onClick={handleBlogDelete} className="btn-delete">
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};
