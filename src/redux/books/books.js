import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const initialState = [
  {
    id: uuidv4(),
    title: 'Book 1',
    author: 'Author 1',
  },
  {
    id: uuidv4(),
    title: 'Book 2',
    author: 'Author 2',
  },
  {
    id: uuidv4(),
    title: 'Book 3',
    author: 'Author 3',
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return ([
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ]);
    case REMOVE_BOOK:
      return (
        state.filter((book) => book.id !== action.id)
      );
    default:
      return state;
  }
};

export const addBook = (title, author, id) => ({
  type: ADD_BOOK,
  title,
  author,
  id,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default reducer;
