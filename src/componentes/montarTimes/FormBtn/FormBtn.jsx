import React, { Component } from "react";
import "./estilo.css";

class FormBtn extends Component {
  render() {
    return (
      <div className="montarTimes_botao">
        <input
          type="button"
          value="Gerar Times"
          className="montarTimes_botao-gerar"
        />
        <input
          type="button"
          value="Limpar Campos"
          className="montarTimes_botao-limpar"
        />
      </div>
    );
  }
}

export default FormBtn;
