import React from "react";
import { Field, reduxForm } from "redux-form";
import {BwmInput} from '../shared/form/Bwminput';

const RegisterForm = props => {
  const { handleSubmit, pristine, reset, submitting, submitCb, valid, errors } = props;
  return (
    <form onSubmit={handleSubmit(submitCb)}>
      <Field
        name="first_name"
        component="input"
        type="text"
        label="Firstname"
        className="form-control"
        component={BwmInput}
      />
      <Field
        name="last_name"
        component="input"
        type="text"
        label="Lastname"
        className="form-control"
        component={BwmInput}
      />
      <Field
        name="username"
        component="input"
        type="text"
        label="Username"
        className="form-control"
        component={BwmInput}
      />
      <Field
        name="email"
        component="input"
        type="email"
        label="Email"
        className="form-control"
        component={BwmInput}
      />
      <Field
        name="password1"
        component="input"
        type="password"
        label="Password"
        className="form-control"
        component={BwmInput}
      />
      <Field
        name="password2"
        component="input"
        type="password"
        label="Password Confirmation"
        className="form-control"
        component={BwmInput}
      />

      <button
        className="btn btn-bwm btn-form"
        type="submit"
        disabled={!valid || pristine || submitting}
      >
        Register
      </button>
      {
        Object.keys(errors).length >0 && 
        <div className='alert alert-danger bwm-res-errors'>
          {Object.values(errors).map((error, index) => <p key={index}>{error}</p>)}
        </div>
      }
    </form>
  );
};

const validate = values => {
  const errors = {};

  if (values.username && values.username.length < 4) {
    errors.username = "Username min length is 4 characters!";
  }
  if (!values.email) {
    errors.email = "Please enter email!";
  }
  if (!values.password2) {
    errors.password2 = "Please enter password confirmation!";
  }
  if (values.password2 && (values.password1 != values.password2)) {
    errors.password2 = "Passwords must match";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};

export default reduxForm({
  form: "registerForm",
  validate
})(RegisterForm);
