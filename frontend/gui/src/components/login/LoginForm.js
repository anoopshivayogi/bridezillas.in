import React from "react";
import { Field, reduxForm } from "redux-form";
import {BwmInput} from '../shared/form/Bwminput';
import {required, minLength4} from '../shared/form/validators'

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting, submitCb, valid } = props;
  return (
    <form onSubmit={handleSubmit(submitCb)}>

      <Field
        name="username"
        component="input"
        type="text"
        label="Username"
        className="form-control"
        component={BwmInput}
        validate={[required, minLength4]}
      />
      <Field
        name="password"
        component="input"
        type="password"
        label="Password"
        className="form-control"
        component={BwmInput}
        validate={[required]}
      />

      <button
        className="btn btn-bwm btn-form"
        type="submit"
        disabled={!valid || pristine || submitting}
      >
        Login
      </button>
    </form>
  );
};


export default reduxForm({
  form: "loginForm",

})(LoginForm);
