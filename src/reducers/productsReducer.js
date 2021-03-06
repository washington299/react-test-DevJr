/* eslint-disable no-param-reassign */
const initialState = {
  products: [
    {
      id: 1,
      image: `${process.env.REACT_APP_URL}images/produto-01.jpeg`,
      name: 'AirPods Apple Fones de ouvido',
      price: 1499,
      installmentPrice: 124.92,
      cashPrice: 1349,
      quantity: 0,
    },
    {
      id: 2,
      image: `${process.env.REACT_APP_URL}images/produto-02.jpeg`,
      name: 'Capa de silicone para iPhone 8/7 cor Areia - rosa',
      price: 299,
      installmentPrice: 24.92,
      cashPrice: 269.1,
      quantity: 0,
    },
    {
      id: 3,
      image: `${process.env.REACT_APP_URL}images/produto-03.jpeg`,
      name: 'Apple pencil',
      price: 729,
      installmentPrice: 60.75,
      cashPrice: 656.1,
      quantity: 0,
    },
    {
      id: 4,
      image: `${process.env.REACT_APP_URL}images/produto-04.jpeg`,
      name: 'Magic Mouse 2 - Prateado',
      price: 549,
      installmentPrice: 45.75,
      cashPrice: 494.1,
      quantity: 0,
    },
    {
      id: 5,
      image: `${process.env.REACT_APP_URL}images/produto-05.jpeg`,
      name: 'Caixa prateada de alumínio com pulseira esportiva branca',
      price: 2899,
      installmentPrice: 241.58,
      cashPrice: 2609.1,
      quantity: 0,
    },
    {
      id: 6,
      image: `${process.env.REACT_APP_URL}images/produto-06.jpeg`,
      name: 'Cabo de lighting para USB (1m)',
      price: 149,
      installmentPrice: 12.42,
      cashPrice: 134.1,
      quantity: 0,
    },
    {
      id: 7,
      image: `${process.env.REACT_APP_URL}images/produto-07.jpeg`,
      name: 'Smart Keyboard para Ipad Pro 12,9 polegadas - inglês (EUA)',
      price: 1099,
      installmentPrice: 91.58,
      cashPrice: 989.1,
      quantity: 0,
    },
    {
      id: 8,
      image: `${process.env.REACT_APP_URL}images/produto-08.jpeg`,
      name: 'Carregador USB de 5W Apple',
      price: 149,
      installmentPrice: 12.42,
      cashPrice: 134.1,
      quantity: 0,
    },
  ],
  total: 0,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const { id, quantity, value } = action.payload;
      // get product i want to add to cart.
      const product = state.products.filter(myProduct => myProduct.id === id);
      // move the product to a constant.
      const purchasedProduct = product[0];
      // sum the product's quantity plus the quantity we selected when added the product to cart.
      purchasedProduct.quantity += quantity;
      // replace the product with the new quantity to the state.
      state.products.slice(0, purchasedProduct.id - 1, purchasedProduct);
      // return the new state with products selected and the new total.
      return { ...state, total: state.total + value };
    default:
      return state;
  }
};

export default productsReducer;
