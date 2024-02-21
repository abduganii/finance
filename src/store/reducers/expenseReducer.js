const initialState = JSON.parse(localStorage.getItem('expenses')) || [];

const expenseReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default expenseReducer;
