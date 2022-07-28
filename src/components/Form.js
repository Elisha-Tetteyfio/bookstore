import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';
import style from './design/Form.module.css';

const Form = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    title: '',
    author: '',
    category: 'New release',
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
      category: 'New release',
    });
  };

  return (
    <>
      <h2 className={style.header}>ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          value={state.title}
          onChange={handle}
          type="text"
          placeholder="Book title"
          className={`${style.title} ${style.formElement}`}
        />
        <input
          name="author"
          value={state.author}
          onChange={handle}
          type="text"
          placeholder="Author"
          className={`${style.author} ${style.formElement}`}
        />
        <button
          type="button"
          onClick={() => dispatch(handleSubmit)}
        >
          ADD BOOK
        </button>
      </form>
    </>
  );
};
export default Form;
