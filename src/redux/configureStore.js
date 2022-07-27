import { configureStore } from '@reduxjs/toolkit';
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import books from './books/books'; // {getbooks}
import categories from './categories/categories';

const reducer = combineReducers({
  books,
  categories,
});

const store = configureStore({ reducer }, applyMiddleware(thunk));
// store.dispatch(getBooks());

export default store;
