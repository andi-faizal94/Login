import { DEC, INC, RESET, ADD } from './numType';

export const decrementFn = () => {
  return {
    type: DEC,
  };
};

export const incrementFn = () => {
  return {
    type: INC,
  };
};

export const addFn = () => {
  return {
    type: ADD,
    payload: 10,
  };
};

export const resetFn = () => {
  return {
    type: RESET,
  };
};
