const initalState = {
  products: [
    {
      id: 1,
      image: 'images/produto-01.jpeg',
      name: 'AirPods Apple Fones de ouvido',
      price: 1499,
      installmentPrice: 124.92,
      cashPrice: 1349,
      quantity: 0,
    },
    {
      id: 2,
      image: 'images/produto-02.jpeg',
      name: 'Capa de silicone para iPhone 8/7 cor Areia - rosa',
      price: 299,
      installmentPrice: 24.92,
      cashPrice: 269.1,
      quantity: 0,
    },
    {
      id: 3,
      image: 'images/produto-03.jpeg',
      name: 'Apple pencil',
      price: 729,
      installmentPrice: 60.75,
      cashPrice: 656.1,
      quantity: 0,
    },
    {
      id: 4,
      image: 'images/produto-04.jpeg',
      name: 'Magic Mouse 2 - Prateado',
      price: 549,
      installmentPrice: 45.75,
      cashPrice: 494.1,
      quantity: 0,
    },
    {
      id: 5,
      image: 'images/produto-05.jpeg',
      name: 'Caixa prateada de alumínio com pulseira esportiva branca',
      price: 2899,
      installmentPrice: 241.58,
      cashPrice: 2609.1,
      quantity: 0,
    },
    {
      id: 6,
      image: 'images/produto-06.jpeg',
      name: 'Cabo de lighting para USB (1m)',
      price: 149,
      installmentPrice: 12.42,
      cashPrice: 134.1,
      quantity: 0,
    },
    {
      id: 7,
      image: 'images/produto-07.jpeg',
      name: 'Smart Keyboard para Ipad Pro 12,9 polegadas - inglês (EUA)',
      price: 1099,
      installmentPrice: 91.58,
      cashPrice: 989.1,
      quantity: 0,
    },
    {
      id: 8,
      image: 'images/produto-08.jpeg',
      name: 'Carregador USB de 5W Apple',
      price: 149,
      installmentPrice: 12.42,
      cashPrice: 134.1,
      quantity: 0,
    },
  ],
  total: 0,
};

const productsReducer = (state = initalState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const product = state.products.filter(
        myProduct => myProduct.id === action.payload.id,
      );
      product[0].quantity += action.payload.quantity;
      state.products[product[0].id - 1] = product[0];
      return { ...state, total: state.total + action.payload.value };
    default:
      return state;
  }
};

export default productsReducer;
