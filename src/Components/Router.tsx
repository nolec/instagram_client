import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "../Routes/Auth";
import Feed from "../Routes/Feed";

interface IProps {
  isLoggedIn: any;
}

const LoggedInRoutes: React.SFC = () => (
  <Switch>
    <Route path="/" exact component={Feed} />
  </Switch>
);
const LoggedOutRoutes: React.SFC = () => (
  <Switch>
    <Route path="/" exact component={Auth} />
  </Switch>
);
const AppRouter: React.SFC<IProps> = ({ isLoggedIn }) => (
  <Router>{isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />}</Router>
);
AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
export default AppRouter;
