export default ({ name, email, sexo }) => ({
  type: 'ADD_USER',
  payload: { name, email, sexo },
});
