import React, { useReducer, useMemo, useCallback, useLayoutEffect, useDebugValue, useRef, forwardRef, useImperativeHandle } from 'react';

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Child component  // useCallback
const ChildComponent = forwardRef(({ onButtonClick }, ref) => {
  const handleClick = useCallback(() => {
    onButtonClick('Button clicked in ChildComponent');
  }, [onButtonClick]);

  // useImperativeHandle
  useImperativeHandle(ref, () => ({
    triggerButtonClick: handleClick,
  }), [handleClick]);

  return (
    <button onClick={handleClick}>Click me</button>
  );
});

// Parent component
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const memoizedValue = useMemo(() => {
    return state.count % 2 === 0 ? 'Even' : 'Odd';
  }, [state.count]);

  const increment = useCallback(() => {
    dispatch({ type: 'INCREMENT' });
  }, []);

  const decrement = useCallback(() => {
    dispatch({ type: 'DECREMENT' });
  }, []);

  const countRef = useRef(state.count);

  // Update the ref value whenever the count changes
  useLayoutEffect(() => {
    countRef.current = state.count;
  }, [state.count]);

  // Log the current count value in the console
  useDebugValue(countRef.current);

  const childComponentRef = useRef();

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <p>Count is {memoizedValue}</p>
      <button onClick={increment}>Increment</button><br/><br/>
      <button onClick={decrement}>Decrement</button><br/><br/>
      <ChildComponent ref={childComponentRef} onButtonClick={(message) => console.log(message)} /><br/><br/>
      <button onClick={() => childComponentRef.current.triggerButtonClick()}>Trigger Child Button Click</button>
    </div>
  );
};
export default Counter;