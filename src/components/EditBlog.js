import React from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { startEditBlog, startRemoveBlog } from "../features/blogsSlice";
import BlogForm from "./BlogForm";

const EditBlog = () => {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.blogs);

  const blog = blogs.find((blog) => blog.id === params.id);

  const handleEditBlog = (blog) => {
    dispatch(
      startEditBlog({
        id: params.id,
        title: blog.title,
        description: blog.description,
      })
    );
    history.push("/dashboard");
  };

  const handleDeleteBlog = () => {
    if (window.confirm("Are you sure you want to delete?")) {
      dispatch(startRemoveBlog(params.id));
      history.push("/dashboard");
    }
  };

  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Edit Blog</h1>
          <Link to={`/read/${params.id}`}>
            Blog Readable at {`http://localhost:3000/read/${params.id}`}
          </Link>
        </div>
      </div>

      <div className="content-container">
        <BlogForm blog={blog} onSubmit={handleEditBlog} />
        <button className="button button--secondary" onClick={handleDeleteBlog}>
          Remove Blog
        </button>
      </div>
    </div>
  );
};

export default EditBlog;
