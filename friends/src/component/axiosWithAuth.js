import axios from "axios"
import React from "react"
import {Route, Redirect} from "react-router-dom"

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        headers: {
            "Content-type": "application/json",
            "Authorization": `${token}`,
        }
    })
}