import React, { Component } from "react";
import "./estilo.css";

class Atacantes extends Component {
  render() {
    return (
      <div className="times_atacante_container">
        <h3 className="timeAtacante_titulo">Atacantes</h3>
        <div className="atacantes_output">
          <label for="atacante1" className="atacantes_output-label">
            Jogador 01:
          </label>
          <input
            type="text"
            id="atacante1"
            className="atacantes_output-1"
            disabled
          />
        </div>
        <div className="atacantes_output">
          <label for="atacante2" className="atacantes_output-label">
            Jogador 02:
          </label>
          <input
            type="text"
            id="atacante2"
            className="atacantes_output-1"
            disabled
          />
        </div>
        <div className="atacantes_output">
          <label for="atacante3" className="atacantes_output-label">
            Jogador 03:
          </label>
          <input
            type="text"
            id="atacante3"
            className="atacantes_output-1"
            disabled
          />
        </div>
        <div className="atacantes_output">
          <label for="atacante4" className="atacantes_output-label">
            Jogador 04:
          </label>
          <input
            type="text"
            id="atacante4"
            className="atacantes_output-1"
            disabled
          />
        </div>
        <div className="atacantes_output">
          <label for="atacante5" className="atacantes_output-label">
            Jogador 05:
          </label>
          <input
            type="text"
            id="atacante5"
            className="atacantes_output-1"
            disabled
          />
        </div>
      </div>
    );
  }
}

export default Atacantes;
