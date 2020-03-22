import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Header extends React.Component {
  renderAuthButtons() {
    const { isAuth } = this.props.auth;

    if (isAuth) {
      return (
        <a className="nav-item nav-link clickable" onClick={this.props.logout}>
          Logout
        </a>
      );
    }

    return (
      <React.Fragment>
        <Link className="nav-item nav-link active" to="/login">
          Login <span className="sr-only clickable">(current)</span>
        </Link>
        <Link className="nav-item nav-link" to="/register">
          Register
        </Link>
      </React.Fragment>
    );
  }
  render() {
    return (
      <nav className="navbar navbar-dark navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand " href="">
            Bridezillas.in
          </a>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ml-auto">{this.renderAuthButtons()}</div>
          </div>
        </div>
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Header);
