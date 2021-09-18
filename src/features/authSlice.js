import { createSlice } from "@reduxjs/toolkit";
import { firebase, googleAuthProvider } from "../firebase/firebase";

const initialState = {
  uid: "",
  name: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.uid = action.payload.uid;
      state.name = action.payload.name;
    },
    logout: (state) => {
      state = {};
    },
  },
});

export const { login, logout } = authSlice.actions;

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};

export default authSlice.reducer;
