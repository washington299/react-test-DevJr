import React from 'react';
import { connect } from 'react-redux';

import formatCurrency from '../../../utils/formatCurrency';

import { FormStyles, Input, PurchaseArea } from './styles';

const Form = ({ total }) => (
  <>
    <FormStyles>
      <Input size={3}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Nome do cliente aqui"
        />
      </Input>
      <Input size={3}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu email aqui"
        />
      </Input>
      <Input size={1}>
        <label htmlFor="sexo">Sexo:</label>
        <select name="sexo" id="sexo">
          <option value="">Selecione:</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      </Input>
    </FormStyles>
    <PurchaseArea>
      <h2>{`Total: ${formatCurrency(total)}`}</h2>
      <button type="submit">FINALIZAR COMPRA</button>
    </PurchaseArea>
  </>
);

const mapStateToProps = state => ({
  total: state.products.total,
});

export default connect(mapStateToProps)(Form);
