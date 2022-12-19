import { legacy_createStore as createStore } from 'redux';
import numReducer from './Num/numReducer';

const store = createStore(numReducer);

export default store;
