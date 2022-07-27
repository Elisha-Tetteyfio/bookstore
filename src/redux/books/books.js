import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/WXeshQmPLOnXdU9WCOG2/books';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_DATA = 'bookstore/books/GET_DATA';

export const getBooks = createAsyncThunk(GET_DATA, async () => {
  const response = await fetch(url);
  const res = await response.json();
  const allBooks = Object.keys(res).map((key) => ({
    id: key,
    ...res[key][0],
  }));
  return allBooks;
});

export const addBook = createAsyncThunk(ADD_BOOK, async (
  { title, author, category },
  thunkAPI,
) => {
  const data = {
    item_id: uuidv4(), title, author, category,
  };

  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(() => thunkAPI.dispatch(getBooks()));

  const { books } = thunkAPI.getState();
  return books;
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id, thunkAPI) => {
  await fetch(`${url}/${id}`, {
    method: 'DELETE',
  })
    .then(() => thunkAPI.dispatch(getBooks()));

  const { books } = thunkAPI.getState();
  return books;
});

const storeSlice = createSlice({
  name: 'bookstore/books',
  initialState: [],
  extraReducers: {
    [getBooks.fulfilled]: (state, action) => action.payload,
    [addBook.fulfilled]: (state, action) => action.payload,
    [removeBook.fulfilled]: (state, action) => action.payload,
  },
});
export const booksList = (state) => state.bookList;
export default storeSlice.reducer;
