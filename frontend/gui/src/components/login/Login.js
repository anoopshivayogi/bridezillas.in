import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actions from "../../actions";

export class Login extends React.Component {
  constructor() {
    super();

    this.loginUser = this.loginUser.bind(this);
  }
  loginUser(userData) {
    this.props.dispatch(actions.login(userData));
  }

  render() {
    const { isAuth, errors } = this.props.auth;
    const { successRegister } = this.props.location.state || false;

    console.log("isauth: ", isAuth);
    if (isAuth) {
      return <Redirect to={{ pathname: "/dashboard" }} />;
    }

    return (
      <section id="login">
        <div className="bwm-form">
          <div className="row">
            <div className="col-md-5">
              <h1>Login</h1>
              {
                successRegister && 
                <div className="alert alert-success">
                  <a>You have been successfully registered, please login now.</a> 
                </div>
              }
              <LoginForm submitCb={this.loginUser} errors={errors} />
            </div>
            <div className="col-md-6 ml-auto">
              <div className="image-container">
                <h2 className="catchphrase">Login to Get Started.</h2>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Login);
