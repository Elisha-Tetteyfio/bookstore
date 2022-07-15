import React from 'react';

const Form = () => (
  <>
    <h2>ADD NEW BOOK</h2>
    <form>
      <input type="text" placeholder="Book title" />
      <input type="text" placeholder="Author" />
      <button type="submit">Add book</button>
    </form>
  </>
);

export default Form;
