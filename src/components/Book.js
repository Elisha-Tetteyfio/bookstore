import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { removeBook } from '../redux/books/books';
import style from './design/Book.module.css';

const Book = (title, author, id, category) => {
  const dispatch = useDispatch();
  return (
    <li key={id} className={style.card}>
      <div className={style.leftSide}>
        <div className="name">
          <div className={style.category}>{category}</div>
          <div className={style.titleDiv}>
            <h3 className={style.title}>{title}</h3>
            <p className={style.author}>{author}</p>
          </div>
          <div>
            <button type="button" className={style.interactButtons}>Comments</button>
            <button
              type="button"
              onClick={() => { dispatch(removeBook(id)); }}
              className={style.interactButtons}
            >
              Remove
            </button>
            <button type="button" className={style.interactButtons}>Edit</button>
          </div>
        </div>
        <div className={style.progress}>
          <div className={style.progressBar} />
          <div className={style.completed}>
            <div className={style.percentComplete}>50%</div>
            <div className={style.completedText}>Completed</div>
          </div>
        </div>
      </div>
      <div className={style.rightSide}>
        <h3 className={style.currentChapter}>CURRENT CHAPTER</h3>
        <p className={style.chapter}>Chapter title</p>
        <button type="button">UPDATE PROGRESS</button>
      </div>
    </li>
  );
};

export default Book;
