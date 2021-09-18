import React from "react";
import BlogFilters from "./BlogFilters";
import BlogList from "./BlogList";

const BlogsDashboard = () => {
  return (
    <div>
      <BlogFilters />
      <BlogList />
    </div>
  );
};

export default BlogsDashboard;
