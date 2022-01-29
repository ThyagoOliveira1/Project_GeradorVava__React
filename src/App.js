import React, { Component } from 'react';
import "./assets/App.css";
import Header from './componentes/header/header';


class App extends Component {
  render() {
    return (
      <div className="conteudo">
        <Header />
      </div>
    );
  }
}

export default App;
