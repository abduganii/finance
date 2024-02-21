const initialState = JSON.parse(localStorage.getItem('incomes')) || [];


const incomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_INCOME':
      return [...state, action.payload];
    default:
      return state;
  }
};

export default incomeReducer;
