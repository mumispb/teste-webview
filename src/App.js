/* global DirectCheckout */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useParams } from 'react-router-dom';

function App() {
  const { id } = useParams();

  function teste() {
    const checkout = new DirectCheckout('E6FB2B4BAE36A71FD404DF75AA3619DEB476159C78FB69EE8F27D3068C17D529', false);
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
        alert(id);
      },
      function (error) {
        /* Erro - A variável error conterá o erro ocorrido ao obter o hash */
        alert(error.message);
        alert(id);
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
      </header>
    </div>
  );
}

export default App;
