import React, { useRef } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const title = useRef(null);
  const author = useRef(null);
  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form style={{ margin: '20px' }}>
        <input ref={title} type="text" placeholder="Book title" />
        <input ref={author} type="text" placeholder="Author" />
        <button
          type="button"
          onClick={() => dispatch(addBook(title.current.value, author.current.value, uuidv4()))}
        >
          Add book
        </button>
      </form>
    </>
  );
};

export default Form;
