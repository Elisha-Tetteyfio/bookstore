import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    author: '',
    category: '',
  });

  const handle = (e) => {
    setState({
      ...state, [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(addBook(state));
    setState({
      title: '',
      author: '',
      category: '',
    });
  };

  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit} style={{ margin: '20px' }}>
        <input name="title" value={state.title} onChange={handle} type="text" placeholder="Book title" />
        <input name="author" value={state.author} onChange={handle} type="text" placeholder="Author" />
        <button
          type="button"
          onClick={() => dispatch(handleSubmit)}
        >
          Add book
        </button>
      </form>
    </>
  );
};
export default Form;
