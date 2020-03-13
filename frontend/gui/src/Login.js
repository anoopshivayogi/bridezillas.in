import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import React, { Component }  from 'react';
import UploadScreen from './UploadScreen';
import axios from 'axios';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login" />
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={(event, newValue) =>
                this.setState({ username: newValue })
              }
            />
            <br />
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={(event, newValue) =>
                this.setState({ password: newValue })
              }
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={event => this.handleClick(event)}
            />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }

  handleClick(event) {
    var apiBaseUrl = "http://localhost:8000/rest-auth/";
    var self = this;
    var payload = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post(apiBaseUrl + "login/", payload)
      .then(function(response) {
        console.log(response);
        if (response.status == 200) {
          console.log("Login successful");
          var uploadScreen = [];
          uploadScreen.push(
            <UploadScreen appContext={self.props.appContext} />
          );
          self.props.appContext.setState({
            loginPage: [],
            uploadScreen: uploadScreen
          });
        } else if (response.status == 204) {
          console.log("Username password do not match");
          alert("username password do not match");
        } else {
          console.log("Username does not exist");
          alert("Username does not exist");
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
}
const style = {
  margin: 15
};

export default Login;
