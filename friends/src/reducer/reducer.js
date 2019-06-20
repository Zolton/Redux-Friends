import {
  FRIENDS_FETCH,
  FRIENDS_FAILURE,
  FRIENDS_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS,
  ADD_NEW_FRIEND
} from "../action/action";

const initialState = {
  friends: [],
  loggingIn: false,
  isFetching: false,
  error: "",
  
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        loggingIn: true
      };
      case LOGIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        error: ''
      };
    case FRIENDS_FETCH:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FRIENDS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    case FRIENDS_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        friends: action.payload
      };
    case ADD_NEW_FRIEND:
      const newFriend = {
        name: action.payload,
        age: (Math.random(2) * 100),
        email: "gabbehuio"
      };
      return {
        ...state,
        friends: [...state.friends, newFriend]
      };
    default:
      return state;
  }
};



