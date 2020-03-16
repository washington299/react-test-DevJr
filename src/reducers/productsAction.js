export default (id, quantity, value) => ({
  type: 'ADD_PRODUCT',
  payload: { id, quantity, value },
});
