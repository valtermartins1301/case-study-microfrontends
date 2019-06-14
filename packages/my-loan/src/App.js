import {navigateToUrl} from 'single-spa';
import React from 'react';

const changeRoute = route => ev => {
  ev.preventDefault();
  navigateToUrl(route);
};

const App = () => {
  const changeActive = ev => {
    changeRoute('/vistoria')(ev);
  };

  return (
    <div className="App">
      <div id="header">Header...</div>
      <nav>
        <a href="/simulacao" onClick={changeRoute('/simulacao')}>
          Simulação
        </a>
        <a href="/processamento" onClick={changeRoute('/processamento')}>
          Processamento
        </a>
        <a href="/vistoria" onClick={changeActive}>
          Vistoria
        </a>
      </nav>
      <div id="simulations">Simulations...</div>
      <div id="processing">Processamento...</div>
      <div id="inspection">Vistoria...</div>
    </div>
  );
};

export default App;
