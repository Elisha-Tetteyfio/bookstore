const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return ([
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
        },
      ]);
    case 'REMOVE_BOOK':
      return ([
        ...state.splice(action.id - 1, 1),
      ]);
    default:
      return state;
  }
};

export const addBook = () => ({
  type: 'ADD_BOOK',
});

export const removeBook = () => ({
  type: 'REMOVE_BOOK',
});

export default reducer;
