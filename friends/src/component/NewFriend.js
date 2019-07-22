import { withFormik, Form, Field } from "formik";
import React, { useState } from "react";
import { axiosWithAuth } from "./axiosWithAuth";

const NewFriend = props => {
  return (
    <Form>
      Add New Friend
      <div>
        <div>
          <label>Name</label>
          <Field type="text" name="name" />
        </div>
        <div>
          <label>Age</label>
          <Field type="text" name="age" />
        </div>
        <div />
        <label>Email</label>
        <Field type="email" name="email" />
      </div>
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

  // POST SENDS BACK THE DATA ARRAY. POST SENDS BACK THE DATA ARRAY. POST SENDS BACK THE DATA ARRAY. 
  //  Just use setFriends to *force* a re-render of the screen, and it won't break like in build week
  // Because POST sends back the data array, just pour it into the hook to force a re-render

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
