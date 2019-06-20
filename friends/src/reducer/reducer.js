import {
  FRIENDS_FETCH,
  FRIENDS_FAILURE,
  FRIENDS_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS,
} from "../action/action";

const initialState = {
  friends: [
    {
      id: 1,
      name: "Joe",
      age: 24,
      email: "joe@lambdaschool.com"
    }
  ],
  loggingIn: false,
  isFetching: false,
  error: "",
  newFriend: {
    name: "",
    age: "",
    email: "",
    id: ""
  }
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
        friends: [...state.friends, action.payload]
      };
    default:
      return state;
  }
};
