import React, { useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <>
      { book.map((element) => Book(element.title, element.author, element.id)) }
      <Form />
    </>
  );
};

export default Books;
