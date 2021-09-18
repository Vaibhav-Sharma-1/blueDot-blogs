import React from "react";
import { useSelector } from "react-redux";

import BlogListItem from "./BlogListItem";
import { getVisibleBlogs } from "../selectors/getVisibleBlogs";

const BlogList = () => {
  const blogs = useSelector((state) => state.blogs.blogs);
  const filters = useSelector((state) => state.filters);
 

  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Blogs</div>
        <div className="show-for-desktop">Blogs</div>
        <div className="show-for-desktop">Author</div>
      </div>
      <div className="list-body">
        {blogs.length !== 0 ? (
          getVisibleBlogs(blogs, filters).map((blog) => (
            <BlogListItem key={blog.id} {...blog} />
          ))
        ) : (
          <div className="list-item list-item--message">
            <span>No Blogs</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogList;
