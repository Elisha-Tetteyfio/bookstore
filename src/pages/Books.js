import React from 'react';
import { useSelector } from 'react-redux/es/exports';
import Book from '../components/Book';
import Form from '../components/Form';

const Books = () => {
  const book = useSelector((state) => state.books);

  return (
    <>
      { book.map((element) => Book(element.title, element.author, element.id)) }
      <Form />
    </>
  );
};

export default Books;
