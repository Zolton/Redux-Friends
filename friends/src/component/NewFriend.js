import { withFormik, Form, Field } from "formik";
import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

const NewFriend = props => {
  return (
    <Form>
      Hello from New Friend
      <Field type="text" name="name" />
      <Field type="text" name="age" />
      <Field type="email" name="email" />
      <button type="submit">Submit</button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues({ name, age, email }) {
    return {
      name: name || "",
      age: age || "",
      email: email || ""
    };
  },

  handleSubmit(values, { resetForm, setErrors, setSubmitting, props }) {
    if (values.email === "greg@zolton.dev") {
      setErrors({ email: "That email is taken" });
    } else {
      axiosWithAuth()
        .post("http://localhost:5000/api/friends", values)
        .then(res => {
          props.setFriends(res.data);
        });
    }
  }
})(NewFriend);
