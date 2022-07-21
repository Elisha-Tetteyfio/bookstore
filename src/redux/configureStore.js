import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import books from './books/books';
import categories from './categories/categories';

const reducer = combineReducers({
  books,
  categories,
});

const store = configureStore({ reducer });
export default store;
