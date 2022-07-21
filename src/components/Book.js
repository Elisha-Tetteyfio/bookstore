import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { removeBook } from '../redux/books/books';

const Book = (title, author, id) => {
  const dispatch = useDispatch();
  return (
    <li key={id} style={{ background: '#eee', margin: '15px' }}>
      <div className="leftSide">
        <div className="name">
          {/* Genre */}
          <br />
          {title}
          <br />
          {author}
          <div>
            <button type="button">Comments</button>
            <button
              type="button"
              onClick={() => { dispatch(removeBook(id)); }}
            >
              Remove
            </button>
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="progress">
          Progress
        </div>
      </div>
      <div className="rightSide">
        <h3>Current Chapter</h3>
        Chapter title
        <button type="button">Update progress</button>
      </div>
    </li>
  );
};

export default Book;
