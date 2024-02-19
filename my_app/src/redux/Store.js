import { configureStore } from "@reduxjs/toolkit";

const initialstate = {
    counter: 0
};

// REducer function

const CounterReducer = (state = initialstate, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { ...state, counter: state.counter + 1 };

        case 'DECREMENT':
            return { ...state, counter: state.counter - 1 };

        default:
            return state
    }

};

const Store = configureStore({
    reducer: CounterReducer,
  });
  
  export default Store;