import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

import BlogForm from "./BlogForm";
import { startAddBlog } from "../features/blogsSlice";

const AddBlog = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleAddBlog = (blog) => {
    dispatch(startAddBlog(blog));
    history.push("/dashboard");
  };
  return (
    <div>
      <div className="page-header">
        <div className="content-container">
          <h1 className="page-header__title">Add Blog</h1>
        </div>
      </div>
      <div className="content-container">
        <BlogForm onSubmit={handleAddBlog} />
      </div>
    </div>
  );
};

export default AddBlog;
