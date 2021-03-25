export const initialState = {
  id: 1,
  username: 'JohnL',
  password: 'asd',
  firstName: 'John',
  lastName: 'LeBlanc',
  email: 'john.leblanc03@gmail.com',
};

export const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    default:
      return state;
  }
};
