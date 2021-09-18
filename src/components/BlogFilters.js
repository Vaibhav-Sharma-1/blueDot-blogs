import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  setTextFilter,
  sortByTitle,
  sortByTitleAndDescription,
  sortByNew,
  sortByPast,
} from "../features/filtersSlice";

const BlogFilters = () => {
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleTextSearch = (e) => {
    if (e.target.value === "title") {
      dispatch(sortByTitle());
    } else if (e.target.value === "titleAndDescription") {
      dispatch(sortByTitleAndDescription());
    }
  };
  const handleSortByDate = (e) => {
    if (e.target.value === "new") {
      dispatch(sortByNew());
    } else if (e.target.value === "past") {
      dispatch(sortByPast());
    }
  };
  return (
    <div className="page-header">
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              placeholder="Search..."
              className="text-input"
              value={filters.text}
              onChange={(e) => dispatch(setTextFilter(e.target.value))}
            />
          </div>
          <div className="input-group__item">
            <select className="select" onChange={handleTextSearch}>
              <option value="title">Title</option>
              <option value="titleAndDescription">Title & Description</option>
            </select>
          </div>
          <div className="input-group__item">
            <select className="select" onChange={handleSortByDate}>
              <option value="new">New</option>
              <option value="past">Past</option>
            </select>
          </div>
          <Link className="button" to="/create">
            Add Blog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogFilters;
