//import axios from "axios"
import { axiosWithAuth } from '../components/axiosWithAuth';


export const FRIENDS_FETCH = "FRIENDS_FETCH"
export const FRIENDS_SUCCESS = "FRIENDS_SUCCESS"
export const FRIENDS_FAILURE = "FRIENDS_FAILURE"
export const ADD_NEW_FRIEND = "ADD_NEW_FRIEND"


export const getFriends = () => dispatch => {
    dispatch({type: FRIENDS_FETCH});
    axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then(res => {
            console.log(res)
            dispatch({
                type: FRIENDS_SUCCESS,
                payload: res.data
            })}
            )
        .catch(rej=> {
            console.log(rej)
            dispatch({
                type: FRIENDS_FAILURE,
                payload: rej.response
            })}
            )
}

  export const addFriend = friend => dispatch => {
    axiosWithAuth()
        .post("http://localhost:5000/api/friends", friend)
        .then(res => {
            console.log(res)
            dispatch({
                type: ADD_NEW_FRIEND,
                payload: res.data
            })}
            )
        .catch(rej=> {
            console.log(rej)
            dispatch({
                type: FRIENDS_FAILURE,
                payload: rej.response
            })}
            )
}

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post('/', creds)
    .then(res => {
        console.log(res)
      localStorage.setItem('token', res.data);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(err => console.log(err.response));
};