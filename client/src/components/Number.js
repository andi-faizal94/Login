import React from 'react';
import { connect } from 'react-redux';
import {
  decrementFn,
  incrementFn,
  addFn,
  resetFn,
} from '../store/Num/numAction';

const Number = (props) => {
  return (
    <div>
      <h1>Counter</h1>
      <p>{props.num}</p>
      <button onClick={props.increment}>INC</button>
      <button onClick={props.decrement}>DEC</button>
      <button onClick={props.add}>ADD</button>
      <button onClick={props.reset}>RESET</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    num: state.num,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(incrementFn()),
    decrement: () => dispatch(decrementFn()),
    add: () => dispatch(addFn()),
    reset: () => dispatch(resetFn()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Number);
