import { BlogItem } from "../blog-item/BlogItem";

export const BlogList = ({ blogs, handleBlogDelete }) => {
  const onBlogDelete = (blogId) => {
    handleBlogDelete(blogId);
  };
  return (
    <ul className="blog-list">
      {blogs.map((blog) => (
        <BlogItem blog={blog} key={blog._id} onBlogDelete={onBlogDelete} />
      ))}
    </ul>
  );
};
