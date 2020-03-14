import { combineReducers, createStore } from 'redux';
import ProductsReducer from './productsReducer';

const Reducer = combineReducers({
  products: ProductsReducer,
});

const store = createStore(Reducer);

export default store;
