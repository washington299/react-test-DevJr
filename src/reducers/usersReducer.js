const initialState = {
  user: { name: '', email: '', sexo: '' },
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      const { name, email, sexo } = action.payload;
      return { ...state, user: { name, email, sexo } };
    default:
      return state;
  }
};

export default usersReducer;
