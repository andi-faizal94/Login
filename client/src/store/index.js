import { legacy_createStore as createStore } from 'redux';
import { DEC, INC } from './numType';

const initialState = {
  num: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return {
        num: state.num + 1,
      };
    case DEC:
      return {
        num: state.num - 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
