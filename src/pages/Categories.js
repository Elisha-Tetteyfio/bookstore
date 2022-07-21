import React from 'react';
import { useDispatch } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  return (
    <button
      type="button"
      onClick={() => { dispatch(checkStatus()); }}
    >
      Check status
    </button>
  );
};

export default Categories;
