import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App, { history } from "./App";
import { store } from "./app/store";
import { startSetBlogs } from "./features/blogsSlice";
import { login, logout } from "./features/authSlice";
import { firebase } from "./firebase/firebase";
import LoadingPage from "./components/LoadingPage";
import "./styles/styles.scss";
import "./index.css";

let hasRendered = false;

const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,

      document.getElementById("root")
    );

    hasRendered = true;
  }
};
ReactDOM.render(<LoadingPage />, document.getElementById("root"));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login({ uid: user.uid, name: user.displayName }));

    store.dispatch(startSetBlogs()).then(() => {
      renderApp();

      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
    store.dispatch(logout());

    renderApp();
    history.push("/");
  }
});
