const initalState = {
  products: [
    {
      id: 1,
      name: 'AirPods Apple Fones de ouvido',
      price: 1.499,
      installmentPrice: 124.92,
      cashPrice: 1349,
    },
    {
      id: 2,
      name: 'Capa de silicone para iPhone 8/7 cor Areia - rosa',
      price: 299,
      installmentPrice: 24.92,
      cashPrice: 269.1,
    },
    {
      id: 3,
      name: 'Apple pencil',
      price: 729,
      installmentPrice: 60.75,
      cashPrice: 656.1,
    },
    {
      id: 4,
      name: 'Magic Mouse 2 - Prateado',
      price: 549,
      installmentPrice: 45.75,
      cashPrice: 494.1,
    },
    {
      id: 5,
      name: 'Caixa prateada de alumínio com pulseira esportiva branca',
      price: 2.899,
      installmentPrice: 241.58,
      cashPrice: 2609.1,
    },
    {
      id: 6,
      name: 'Cabo de lighting para USB (1m)',
      price: 149,
      installmentPrice: 12.42,
      cashPrice: 134.1,
    },
    {
      id: 7,
      name: 'Smart Keyboard para Ipad Pro 12,9 polegadas - inglês (EUA)',
      price: 1.099,
      installmentPrice: 91.58,
      cashPrice: 989.1,
    },
    {
      id: 8,
      name: 'Carregador USB de 5W Apple',
      price: 149,
      installmentPrice: 12.42,
      cashPrice: 134.1,
    },
  ],
  total: 0,
};

const productsReducer = (state = initalState, action) => state;

export default productsReducer;
