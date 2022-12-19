import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrementFn,
  incrementFn,
  addFn,
  resetFn,
} from '../store/Num/numAction';

const Number = () => {
  const num = useSelector((state) => state.num);
  const show = useSelector((state) => state.isNum);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementFn());
  };

  const decrement = () => {
    dispatch(decrementFn());
  };

  const add = () => {
    dispatch(addFn());
  };

  const reset = () => {
    dispatch(resetFn());
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
