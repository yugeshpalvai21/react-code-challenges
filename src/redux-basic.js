import { createStore } from 'redux';

//action generator with object destructuring syntax
const handleIncrement = ({incrementBy = 1}={}) => ({
    type: 'INCREMENT',
    incrementBy
});

const handleDecrement = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const handleReset = () => ({
  type: 'RESET'
});



//creating store with default state
const store = createStore((state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
     return {count: state.count + action.incrementBy}
    case 'DECREMENT':
      return {count: state.count - action.decrementBy}
    case 'RESET':
      return {count: 0}
    default:
      return state;
  }
});

//subscribe - this function will be called whenever store dispaching action

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// dispatching or calling actions to change state of redux
store.dispatch(handleIncrement({incrementBy: 20}));
store.dispatch(handleIncrement());
store.dispatch(handleDecrement({decrementBy: 5}));
store.dispatch(handleDecrement());
//unsubscribe();
store.dispatch(handleReset());
