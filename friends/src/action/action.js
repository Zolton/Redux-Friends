import axios from "axios"
import { axiosWithAuth } from '../components/axiosWithAuth';


export const FRIENDS_FETCH = "FRIENDS_FETCH"
export const FRIENDS_SUCCESS = "FRIENDS_SUCCESS"
export const FRIENDS_FAILURE = "FRIENDS_FAILURE"


export const getFriends = () => dispatch => {
    dispatch({type: FRIENDS_FETCH});
    axiosWithAuth()
        .get("http://localhost:5000/api/friends")
        .then(res => 
            //console.log(res),
            dispatch({
                type: FRIENDS_SUCCESS,
                payload: res.data
            })
            )
        .catch(rej=>
            //console.log(rej),
            dispatch({
                type: FRIENDS_FAILURE,
                payload: rej.response
            })
            )
}

// export const FETCH_DATA_START = 'FETCH_DATA_START';
// export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
// export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
// export const getData = () => dispatch => {
//   dispatch({ type: FETCH_DATA_START });
//   axiosWithAuth()
//     .get('/data')
//     .then(res => { console.log(res)
//     //   dispatch({ type: FETCH_DATA_SUCCESS, payload: res.data.data });
//     })
//     .catch(err => {
//       console.log(err.response);
//     //   dispatch({ type: FETCH_DATA_FAILURE, payload: err.response.data.error });
//     });
// };


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