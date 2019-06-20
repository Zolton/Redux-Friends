import React from "react"

export class Login extends React.Component {
  render() {
    return (
      <>
        <input 
        type="text" 
        placeholder="username" 
        name="username" />

        <input 
        type="text" 
        placeholder="password" 
        name="password" />
      </>
    );
  }
}
