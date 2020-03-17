import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import formatCurrency from '../../utils/formatCurrency';
import addUser from '../../reducers/usersAction';

import PageStyles from './styles';

const PurchasedPage = ({ user, total, dispatch }) => {
  const history = useHistory();
  const { name, email, sexo } = user;

  if (!name || !email || !sexo) {
    dispatch(addUser({ name: '', email: '', sexo: '' }));
    history.push('/');
  }

  function handleButton() {
    window.location.href = process.env.REACT_APP_URL;
  }

  return (
    <PageStyles>
      <div className="message-box">
        <h2 className="message-box-person">{`${user.name},`}</h2>
        <div className="message-box-message">
          Sua compra no valor de
          <span>{formatCurrency(total)}</span>
          foi finalizada com sucesso
        </div>
        <img
          src={`${process.env.REACT_APP_URL}images/purchase.png`}
          alt="Compra realizada com sucesso"
        />
        <button type="button" onClick={handleButton}>
          INICIAR NOVA COMPRA
        </button>
      </div>
    </PageStyles>
  );
};

const mapStateToProps = state => {
  const { user } = state.user;
  const { total } = state.products;
  return { user, total };
};

export default connect(mapStateToProps)(PurchasedPage);
