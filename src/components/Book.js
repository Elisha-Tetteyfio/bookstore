import React from 'react';

const Book = (title, author) => (
  <>
    <div className="leftSide">
      <div className="name">
        Genre
        <br />
        {title}
        <br />
        {author}
        <div>
          <button type="button">Comments</button>
          <button type="button">Remove</button>
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
  </>
);

export default Book;
