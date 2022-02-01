import React, { Component } from 'react';
import "./assets/App.css";
import Header from './componentes/header/header';
import Sobre from './componentes/sobre/sobre';
import MontarTimes from './componentes/montarTimes/montarTimes';
import Times from './componentes/times/times';

class App extends Component {
  render() {
    return (
      <div className="conteudo">
        <Header />
        <Sobre />
        <MontarTimes />
        <Times />
      </div>
    );
  }
}

export default App;
