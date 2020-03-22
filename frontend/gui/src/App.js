import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import * as redux from "redux";

import { Provider } from "react-redux";

import Header from "./components/shared/Header";
import Login from "./components/login/Login";
import { Register } from "./components/register/Register";
import { Dashboard } from "./components/dashboard/Dashboard";

import * as actions from "./actions";
import "./App.css";

const store = require("./reducers").init();

class App extends Component {
  componentWillMount() {
    this.checkAuthState();
  }

  checkAuthState() {
    store.dispatch(actions.checkAuthState());
  }

  logout() {
    store.dispatch(actions.logout());
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Header logout={this.logout}/>
            <div className="container">
              <Route exact path="/login" component={Login} />
              <Route exact path="/Register" component={Register} />
              <Route exact path="/dashboard" component={Dashboard} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
