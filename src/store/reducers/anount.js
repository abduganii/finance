const initialState = JSON.parse(localStorage.getItem('amount')) || [];

const amountReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_AMOUNT':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default amountReducer;
