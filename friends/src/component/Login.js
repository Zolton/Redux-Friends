import React, {useState} from "react"
import {axiosWithAuth} from "./axiosWithAuth"

const Login = (props) => {
    const [credentials, setCredentials] = useState({})

    login = event => {
        event.preventDefault();
        axiosWithAuth()
            .get("http://localhost:5000/api/login", credentials)
            .then(res=>{
                localStorage.setItem("token", res.data.token);
                this.props.history.push("/")
            })
    }
    return (
        

    )
}