import React from 'react';

// import { Container } from './styles';

function App() {
  function handleShare() {
    alert('entrou na funcao');
    window.FB.ui(
      {
        display: 'popup',
        method: 'share',
        href: 'https://developers.facebook.com/docs/',
      },
      function (response) {
        alert('parou 1');
        if (response === undefined) {
          alert('Fechou a caixa de diálogo. Falha no compartilhamento');
          console.log('Fechou a caixa de diálogo. Falha no compartilhamento');
        } else if (response.length === 0) {
          console.log('Compartilhado com sucesso');
          alert('Compartilhado com sucesso');
        } else {
          console.log('outro');
          alert('erro');
        }
      }
    );
    alert('parou 2');
  }

  return (
    <button type='button' onClick={handleShare} style={{ padding: 10, backgroundColor: 'blue', color: 'white' }}>
      Teste de compartilhamento fb
    </button>
  );
}

export default App;
