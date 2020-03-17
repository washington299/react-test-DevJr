import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import formatCurrency from '../../../utils/formatCurrency';
import addUser from '../../../reducers/usersAction';

import { Error } from '../../../utils/GlobalStyles';
import { FormStyles, Input, PurchaseArea } from './styles';

const Form = ({ total, dispatch }) => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const [purchaseError, setPurchaseError] = useState(false);

  function submit(data) {
    if (total === 0) {
      setPurchaseError(true);
      return;
    }

    dispatch(addUser(data));
    history.push('/purchased');
  }

  return (
    <>
      <FormStyles>
        <div className="form__area--name">
          <Input>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Nome do cliente aqui"
              ref={register({ required: true })}
            />
            {errors.name && <Error>Campo obrigatório</Error>}
          </Input>
        </div>
        <div className="form__area--email">
          <Input>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Digite seu email aqui"
              ref={register({ required: true })}
            />
            {errors.email && <Error>Campo obrigatório</Error>}
          </Input>
        </div>
        <div className="form__area--select">
          <Input>
            <label htmlFor="sexo">Sexo:</label>
            <select name="sexo" id="sexo" ref={register({ required: true })}>
              <option value="">Selecione:</option>
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
            </select>
            {errors.sexo && <Error>Campo obrigatório</Error>}
          </Input>
        </div>
      </FormStyles>
      <PurchaseArea>
        <h2>{`Total: ${formatCurrency(total)}`}</h2>
        <input type="hidden" name="total" ref={register} value={total} />
        <input
          type="submit"
          value="FINALIZAR COMPRA"
          onClick={handleSubmit(submit)}
        />
        {purchaseError && <Error>Selecione um produto</Error>}
      </PurchaseArea>
    </>
  );
};

const mapStateToProps = state => {
  const { total } = state.products;

  return { total };
};

export default connect(mapStateToProps)(Form);
