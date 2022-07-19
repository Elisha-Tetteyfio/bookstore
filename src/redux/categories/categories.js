const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';
const initialState = [];

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return ('Under construction');
    default:
      return (state);
  }
};

export default reducer;
