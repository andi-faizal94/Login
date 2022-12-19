import { DEC, INC, RESET, ADD } from './numType';

export const decrement = () => {
  return {
    type: DEC,
  };
};

export const increment = () => {
  return {
    type: INC,
  };
};

export const add = () => {
  return {
    type: ADD,
    payload: 10,
  };
};

export const reset = () => {
  return {
    type: RESET,
  };
};
