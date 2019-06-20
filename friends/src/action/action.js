import axios from "axios"

export const FRIENDS_FETCH = "FRIENDS_FETCH"
export const FRIENDS_SUCCESS = "FRIENDS_SUCCESS"
export const FRIENDS_FAILURE = "FRIENDS_FAILURE"


export const getFriends = () => dispatch => {
    dispatch({type: FRIENDS_FETCH});
    axios
        .get("http://localhost:5000")
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