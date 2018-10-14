import React from "react";
import PropTypes from "prop-types";

const login = props => (
  <nav className="login">
    <h2>Invetory Login</h2>
    <p>Sign in to manage your store's ivnentory</p>
    <button className="github" onClick={() => props.authenticate("Github")}>
      Log In With Github
    </button>
    <button className="twitter" onClick={() => props.authenticate("Twitter")}>
      Log In With Twitter
    </button>
    <button className="facebook" onClick={() => props.authenticate("Facebook")}>
      Log In With Facebook
    </button>
  </nav>
);

login.propTypes = {
  authenticate: PropTypes.func.isRequired
};

export default login;
