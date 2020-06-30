/* global DirectCheckout */
import React, { useRef, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useParams, useHistory, Link } from 'react-router-dom';

function App({ router }) {
  const { name, number, cvc, year, month } = useParams();
  const history = useHistory();
  const aRef = useRef(null);
  const [hash, setHash] = useState(null);
  console.log(name, number, cvc, month, year);

  useEffect(() => {
    if (hash) {
      alert('entrou no useeffect com hash');
      aRef.current.click();
    }
  }, [hash]);

  function teste() {
    const checkout = new DirectCheckout('96299D8734D8F4BAF2695F2374D383FB068088B788DE0F7FAB0E1027B526F063', false);
    /* Em sandbox utilizar o construtor new DirectCheckout('PUBLIC_TOKEN', false); */
    const cardData = {
      cardNumber: '5226884528524790',
      holderName: 'Murilo',
      securityCode: '067',
      expirationMonth: '01',
      expirationYear: `2027`,
    };
    checkout.getCardHash(
      cardData,
      function (cardHash) {
        console.log(cardHash);
        /* Sucesso - A variável cardHash conterá o hash do cartão de crédito */
        alert(cardHash);
        /* history.push('/teste/?message=success'); */
        console.log(aRef.current);
        setHash(cardHash);
        alert('foi');
      },
      function (error) {
        /* Erro - A variável error conterá o erro ocorrido ao obter o hash */
        alert(error.message);
        console.log(error);
      }
    );
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
          Learn React
        </a>
        <button onClick={teste}>teste</button>
        <a href='/teste/?message=success' ref={aRef}>
          TEESSSTE
        </a>
        <Link to='/teste'>Ir para teste</Link>
      </header>
    </div>
  );
}

export default App;
