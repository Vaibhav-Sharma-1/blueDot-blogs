import React, { useState } from "react";

const BlogForm = (props) => {
  const [blog, setBlog] = useState({
    title: props.blog ? props.blog.title : "",
    description: props.blog ? props.blog.description : "",
  });

  const [error, setError] = useState("");

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setBlog({
      ...blog,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (blog.title && blog.description) {
      props.onSubmit(blog);
    } else {
      setError("Please! Fill Both Fields");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {error && <p className="form__error">{error}</p>}

      <label>Title: </label>
      <input
        type="text"
        name="title"
        className="text-input"
        value={blog.title}
        onChange={handleInput}
        minLength="15"
      />

      <label>Description: </label>
      <textarea
        className="textarea"
        name="description"
        value={blog.description}
        onChange={handleInput}
      ></textarea>

      <button className="button">Add Blog</button>
    </form>
  );
};

export default BlogForm;
