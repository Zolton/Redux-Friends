import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";
import { withFormik, Form, Field } from "formik";
import axios from "axios";

const Login = props => {
  //const [credentials, setCredentials] = useState({})
  // login = event => {
  //     event.preventDefault();
  //     axiosWithAuth()
  //         .get("http://localhost:5000/api/login", credentials)
  //         .then(res=>{
  //             localStorage.setItem("token", res.data.token);
  //             this.props.history.push("/")
  //         })
  // }

  return (
    <Form>
      <Field type="text" name="username" />
      <Field type="password" name="password" />
      <button type="submit">Submit</button>
    </Form>
  );
};

const FormikLoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  handleSubmit(values, { resetForm, setErrors, setSubmitting }) {
    if (values.email === "greg@zolton.dev") {
      setErrors({ email: "That email is taken" });
    } else {
      axiosWithAuth()
        .post("http://localhost:5000/api/login", values)
        .then(res => {
          localStorage.setItem("token", res.data.token);
          //this.props.history.push("/protected")
        });
    }
  }
})(Login);

export default FormikLoginForm;
