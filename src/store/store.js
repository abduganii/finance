import { createStore, combineReducers } from 'redux';
import incomeReducer from './reducers/incomeReducer';
import expenseReducer from './reducers/expenseReducer';
import anountReducer from './reducers/anount';

const rootReducer = combineReducers({
  incomes: incomeReducer,
  expenses: expenseReducer,
  anount: anountReducer,
});

const store = createStore(rootReducer);

export default store;
