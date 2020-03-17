import { combineReducers, createStore } from 'redux';
import ProductsReducer from './productsReducer';
import UsersReducer from './usersReducer';

const Reducer = combineReducers({
  products: ProductsReducer,
  user: UsersReducer,
});

const store = createStore(Reducer);

export default store;
