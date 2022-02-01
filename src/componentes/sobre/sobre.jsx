import React, { Component } from "react";
import "./estilo.css";

class Sobre extends Component {
  render() {
    return (
      <section className="sobre">
        <div className="sobre_container container">
          <h2 className="sobre_titulo">
            Monte times de uma maneira rápida e moderna!
          </h2>
          <p className="sobre_texto">
            Através do Team Maker, você conseguirá montar times para jogos da
            categoria eSporst para jogar com seus amigos.
          </p>
        </div>
      </section>
    );
  }
}

export default Sobre;
