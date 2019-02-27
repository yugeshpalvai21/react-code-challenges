import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';
//Expenses Action Generators

const handleAddExpense = ({title, description, amount, createdAt} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
  id: uuid(),
  title,
  description,
  amount,
  createdAt
}});

const handleEditExpense = (id,updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

const handleRemoveExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// Filters Action Generators

const handleTextSearch = (text = '') => ({
  type: 'textSearch',
  text
});

const handleSortByDate = () => ({
  type: 'sortBySearch'
});

const handleSortByAmount = () => ({
  type: 'sortByAmount'
});

const handleStartDate = (startDate) => ({
  type: 'setStartDate',
  startDate,
});

const handleEndDate = (endDate) => ({
  type: 'setEndDate',
  endDate,
});

// Handling Individual Reducers
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if(expense.id === action.id) {
          return {...expense, ...action.updates};
        }else {
          return expense;
        }
      });
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => {
        if(expense.id !== action.id){
          return expense;
        }
      });
    default:
      return state;
  }
}

// Handling Filters Reducer
const filtersReducerDefaultState = {text: '', sortBy: '', startDate: undefined, endDate: undefined}
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    case 'textSearch':
      return {...state, text: action.text}
    case 'sortByDate':
      return {...state, sortBy: 'date'}
    case 'sortByAmount':
      return {...state, sortBy: 'amount'}
    case 'setStartDate':
      return {...state, startDate: action.startDate}
    case 'setEndDate':
      return {...state, endDate: action.endDate}
    default:
    return state;
  }
}

// Defining Store
const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
}));

//Displaying Outut Whenever dispaching actions to combineReducers

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate ;
    const endDateMatch = typeof endtDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch
  }).sort((a,b) => {
    if(sortBy == 'amount') {
      return a.amount < b.amount ? 1 : -1
    } else if(sortBy == 'date') {
      return a.createdAt < b.createdAt ? 1 : -1
    }
  });
}
const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

// Dispatching actions to Reducers

const expenseOne = store.dispatch(handleAddExpense({
    title: 'rent',
    description: 'this month rental exense',
    amount: 250,
    createdAt: 143
}));

const expenseTwo = store.dispatch(handleAddExpense({
  title: 'gas',
  description: 'this month gas bill',
  amount: 100,
  createdAt: 123
}));

const expenseThree = store.dispatch(handleAddExpense({
  title: 'water',
  description: 'this month water bill',
  amount: 600,
  createdAt: 320
}));
//console.log(expenseOne);

store.dispatch(handleEditExpense(expenseOne.expense.id, {amount: 340}));
//store.dispatch(handleRemoveExpense(expenseTwo.expense.id));

store.dispatch(handleTextSearch('sowraw'));
store.dispatch(handleTextSearch());
store.dispatch(handleSortByDate());
store.dispatch(handleSortByAmount());
store.dispatch(handleStartDate(123));
store.dispatch(handleStartDate());
store.dispatch(handleEndDate(456));
