import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";

import database from "../firebase/firebase";

const ReadBlog = (props) => {
  const params = useParams();
  const history = useHistory();

  const [state, setstate] = useState({
    blog: {
      title: "",
      description: "",
    },
  });
  const isMounted = React.useRef(false);

  const fetchBlog = () => {
    database
      .ref(`blogs/${params.id}`)
      .once("value")
      .then((snapshot) => {
        if (isMounted.current) {
          setstate({
            blog: snapshot.val(),
          });
        }

        if (state.blog === null) {
          history.push("/");
        }
      });
  };

  useEffect(() => {
    isMounted.current = true;
    fetchBlog();
    return () => (isMounted.current = false);
  }, []);
  return (
    <>
      <div className="list-header">
        <div className="show-for-mobile">Blog</div>
        <div className="show-for-desktop">Blog</div>
      </div>
      {state ? (
        <div className="list-item">
          <div>
            <h3 className="list-item__title">{state.blog.title}</h3>

            <pre>{state.blog.description}</pre>
          </div>
        </div>
      ) : (
        <p>Error Loading Blog...</p>
      )}
    </>
  );
};

export default ReadBlog;
