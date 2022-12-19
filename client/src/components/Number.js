import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Number = () => {
  const num = useSelector((state) => state.num);
  const show = useSelector((state) => state.isNum);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({ type: 'INC' });
  };

  const decrement = () => {
    dispatch({ type: 'DEC' });
  };

  const add = () => {
    dispatch({ type: 'ADD', payload: 10 });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };
  return (
    <div>
      {' '}
      <h1>Counter</h1>
      <p>{num}</p>
      <p>{show}</p>
      <button onClick={increment}>INC</button>
      <button onClick={decrement}>DEC</button>
      <button onClick={add}>ADD</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
};

export default Number;
