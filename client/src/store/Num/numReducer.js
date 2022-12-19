import { DEC, INC, ADD, RESET } from './numType';

const initialState = {
  num: 0,
};

const numReducer = (state = initialState, action) => {
  switch (action.type) {
    case INC:
      return {
        num: state.num + 1,
      };
    case DEC:
      return {
        num: state.num - 1,
      };
    case ADD:
      return {
        num: state.num + action.payload,
      };

    case RESET:
      return {
        num: (state.num = 0),
      };

    // case TRULY:
    //   return {
    //     ...state,
    //     isNum: !state.isNum,
    //   };

    // case FAlSY:
    //   return {
    //     ...state,
    //     isNum: false,
    //   };
    default:
      return state;
  }
};

export default numReducer;
