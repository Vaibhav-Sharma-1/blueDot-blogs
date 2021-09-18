import { createSlice } from "@reduxjs/toolkit";

import database from "../firebase/firebase";

const initialState = {
  blogs: [],
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blogs = [...state.blogs, action.payload];
    },
    editBlog: (state, action) => {
      state.blogs = state.blogs.map((blog) => {
        if (blog.id === action.payload.id) {
          return {
            ...blog,
            ...action.payload,
          };
        } else {
          return blog;
        }
      });
    },
    removeBlog: (state, action) => {
      state.blogs = state.blogs.filter((blog) => blog.id !== action.payload);
    },
    setBlogs: (state, action) => {
      state.blogs = action.payload;
    },
  },
});

export const { addBlog, editBlog, removeBlog, setBlogs } = blogsSlice.actions;

export const startAddBlog = (blogData) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { title = "", description = "", createdAt = Date.now() } = blogData;
    const blog = { title, description, createdAt };

    const blogRef = database.ref("blogs/");
    const newBlogKey = blogRef.push().key;

    let newBlog = {};
    newBlog[`blogs/${newBlogKey}`] = {
      ...blog,
    };
    newBlog[`users/${uid}/blogs/${newBlogKey}`] = {
      ...blog,
    };

    return database
      .ref()
      .update(newBlog)
      .then(() => {
        dispatch(
          addBlog({
            id: newBlogKey,
            ...blog,
          })
        );
      });
  };
};

export const startEditBlog = (blog) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const { id } = blog;
    const updateBlog = {};
    for (let prop in blog) {
      updateBlog[`users/${uid}/blogs/${id}/${prop}`] = blog[prop];
      updateBlog[`blogs/${id}/${prop}`] = blog[prop];
    }
    return database
      .ref()
      .update(updateBlog)
      .then(() => {
        dispatch(editBlog(blog));
      });
  };
};

export const startSetBlogs = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/blogs`)
      .once("value")
      .then((snapshot) => {
        const blogs = [];

        snapshot.forEach((childSnapshot) => {
          blogs.push({
            id: childSnapshot.key,
            ...childSnapshot.val(),
          });
        });
        dispatch(setBlogs(blogs));
      });
  };
};

export const startRemoveBlog = (id) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const deleteBlog = {};
    deleteBlog[`blogs/${id}`] = null;
    deleteBlog[`users/${uid}/blogs/${id}`] = null;
    return database
      .ref()
      .update(deleteBlog)
      .then(() => {
        dispatch(removeBlog(id));
      });
  };
};

export default blogsSlice.reducer;
