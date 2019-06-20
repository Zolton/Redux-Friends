

const initialState = {
    friends: [{
      id: 1,
      name: 'Joe',
      age: 24,
      email: 'joe@lambdaschool.com',
    }],
    newFriend: {
      name: "",
      age: "",
      email: "",
      id: "",
    }
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
