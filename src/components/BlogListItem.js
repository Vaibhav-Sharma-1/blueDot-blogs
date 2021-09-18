import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

import moment from "moment";

const BlogListItem = ({ title, description, createdAt, id }) => {
  const username = useSelector((state) => state.auth.name);
  const history = useHistory();

  const handleRead = () => {
    history.push(`/read/${id}`);
  };
  return (
    <div className="list-item">
      <div>
        <Link className="list-item_Link" to={`/edit/${id}`}>
          <h3 className="list-item__title">{title}</h3>
          <span className="list-item__sub-title">
            {moment(createdAt).format("MMMM Do, YYYY")}
          </span>
        </Link>
        <p className="list-item__title">
          {description.substring(0, 50)}
          <span
            style={{ color: "blue", cursor: "pointer" }}
            onClick={handleRead}
          >
            ...Show more
          </span>
        </p>
      </div>
      <h5 className="list-item__data"> by {username}</h5>
    </div>
  );
};

export default BlogListItem;
