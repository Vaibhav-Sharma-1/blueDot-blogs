import React from "react";
import { createBrowserHistory } from "history";
import { Router, Switch,  Redirect } from "react-router-dom";

import LoginPage from "./components/LoginPage";
import BlogsDashboard from "./components/BlogsDashboard";
import AddBlog from "./components/AddBlog";
import ReadBlog from "./components/ReadBlog";
import EditBlog from "./components/EditBlog";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PublicRoute path="/read/:id" component={ReadBlog} />
        <PrivateRoute
          path="/dashboard"
          component={BlogsDashboard}
          exact={true}
        />
        <PrivateRoute path="/create" component={AddBlog} exact={true} />
        <PrivateRoute path="/edit/:id" component={EditBlog} exact={true} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
