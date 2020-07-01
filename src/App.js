/* global DirectCheckout */
import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const paymentToken =
  process.env.NODE_ENV === 'production'
    ? '0CFCAF8141F4C89967CD3AA391D21ACA1689CBF1F05E05F7400F26E33E3BF0A787F33CB843F88E57'
    : 'E6FB2B4BAE36A71FD404DF75AA3619DEB476159C78FB69EE8F27D3068C17D529';

function App({ router }) {
  const { name, number, cvc, year, month } = useParams();
  const aRef = useRef(null);
  const [hash, setHash] = useState(null);

  useEffect(() => {
    if (hash) {
      aRef.current.click();
    }
  }, [hash]);

  useEffect(() => {
    function GenerateHash() {
      const checkout =
        process.env.NODE_ENV === 'production'
          ? new DirectCheckout(paymentToken)
          : new DirectCheckout(paymentToken, false);
      /* Em sandbox utilizar o construtor new DirectCheckout('PUBLIC_TOKEN', false); */
      const cardData = {
        cardNumber: number,
        holderName: name,
        securityCode: cvc,
        expirationMonth: month,
        expirationYear: year,
      };
      checkout.getCardHash(
        cardData,
        function (cardHash) {
          /* Sucesso - A variável cardHash conterá o hash do cartão de crédito */
          /* history.push('/teste/?message=success'); */
          setHash(cardHash);
        },
        function (error) {
          /* Erro - A variável error conterá o erro ocorrido ao obter o hash */
          console.log(error);
        }
      );
    }
    GenerateHash();
  }, [cvc, month, name, number, year]);

  return (
    <a style={{ display: 'none' }} href={`/?message=success?hash=${hash}`} ref={aRef}>
      a
    </a>
  );
}

export default App;
