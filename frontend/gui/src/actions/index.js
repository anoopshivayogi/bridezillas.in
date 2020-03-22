import axios from "axios";
import authService from "../services/auth-service";

import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from "./types";
// REGISTRATION AUTH ACTIONS

export const register = userData => {
  return axios
    .post("http://localhost:8000/rest-auth/registration/", { ...userData })
    .then(
      response => {
        return response;
      },
      err => {
        console.log("Error", err.response);
        return Promise.reject(err.response.data);
      }
    );
};

const loginSuccess = () => {
  return {
    type: LOGIN_SUCCESS
  };
};

const loginFailure = errors => {
  return {
    type: LOGIN_FAILURE,
    errors
  };
};

export const checkAuthState = () => {
  return dispatch => {
    if (authService.isAuthenticated()) {
      dispatch(loginSuccess());
    }
  };
};

export const login = userData => {
  return dispatch => {
    return axios
      .post("http://localhost:8000/rest-auth/login/", { ...userData })
      .then(
        response => {
          let token = response.data["token"];
          if (token) {
            authService.saveToken(token);
            dispatch(loginSuccess());
          }
        },
        error => {
          console.log("Failure: ", error);
          dispatch(loginFailure(error.data));
        }
      );
  };
};

export const logout = () => {
  authService.invalidateUser();

  return {
    type: LOGOUT
  };
};
