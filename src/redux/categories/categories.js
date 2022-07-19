export const checkStatus = () => ({
  type: 'CHECK_STATUS',
});

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'CHECK_STATUS':
      return ('Under construction');
    default:
      return (state);
  }
};

export default reducer;
