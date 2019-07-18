import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import { withFormik, Form, Field } from "formik";
import axios from "axios";

const Login = props => {
  return (
    <Form>
      <Field type="text" name="username" />
      <Field type="password" name="password" />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  handleSubmit(values, { resetForm, setErrors, setSubmitting, props }) {
    if (values.email === "greg@zolton.dev") {
      setErrors({ email: "That email is taken" });
    } else {
      axiosWithAuth()
        .post("http://localhost:5000/api/login", values)
        .then(res => {
          console.log(props);
          localStorage.setItem("token", res.data.payload);
          props.history.push("/protected");
        });
    }
  }
})(Login);
