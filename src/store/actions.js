export const addIncome = (income) => {
    return {
      type: 'ADD_INCOME',
      payload: income,
    };
  };
  
  export const addExpense = (expense) => {
    return {
      type: 'ADD_EXPENSE',
      payload: expense,
    };
  };
  
  export const addMount = (expense) => {
    return {
      type: 'ADD_AMOUNT',
      payload: expense,
    };
  };