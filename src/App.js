/* global DirectCheckout */
import React, { useRef, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const tokenAPI =
  "E6FB2B4BAE36A71FD404DF75AA3619DEB476159C78FB69EE8F27D3068C17D529";

function App({ router }) {
  const { name, number, cvc, year, month } = useParams();
  const aRef = useRef(null);
  const [hash, setHash] = useState(null);
  console.log(name, number, cvc, month, year);

  useEffect(() => {
    if (hash) {
      aRef.current.click();
    }
  }, [hash]);

  useEffect(() => {
    function GenerateHash() {
      const checkout = new DirectCheckout(tokenAPI, false);
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
    <a
      style={{ display: "none" }}
      href={`/teste/?message=success?hash=${hash}`}
      ref={aRef}
    >
      a
    </a>
  );
}

export default App;
