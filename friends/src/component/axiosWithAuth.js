import axios from "axios"
import React from "react"
import {Route, Redirect} from "react-router-dom"

// Don't question it, don't second-guess.  Just pick whichever name you 
// want to call your key ("token" here), and stick with it thru-out all your requests

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        headers: {
            "Content-type": "application/json",
            "Authorization": `${token}`,
        }
    })
}