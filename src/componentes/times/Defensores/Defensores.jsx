import React, { Component } from "react";
import "./estilo.css";

class Defensores extends Component {
  render() {
    return (
      <div className="times_defensor_container">
        <h3 className="timeDefensor_titulo">Defensores</h3>
        <div className="defensores_output">
          <label for="defensor1" className="defensores_output-label">
            Jogador 01:
          </label>
          <input
            type="text"
            id="defensor1"
            className="defensores_output-1"
            disabled
          />
        </div>
        <div className="defensores_output">
          <label for="defensor2" className="defensores_output-label">
            Jogador 02:
          </label>
          <input
            type="text"
            id="defensor2"
            className="defensores_output-1"
            disabled
          />
        </div>
        <div className="defensores_output">
          <label for="defensor3" className="defensores_output-label">
            Jogador 03:
          </label>
          <input
            type="text"
            id="defensor3"
            className="defensores_output-1"
            disabled
          />
        </div>
        <div className="defensores_output">
          <label for="defensor4" className="defensores_output-label">
            Jogador 04:
          </label>
          <input
            type="text"
            id="defensor4"
            className="defensores_output-1"
            disabled
          />
        </div>
        <div className="defensores_output">
          <label for="defensor5" className="defensores_output-label">
            Jogador 05:
          </label>
          <input
            type="text"
            id="defensor5"
            className="defensores_output-1"
            disabled
          />
        </div>
      </div>
    );
  }
}

export default Defensores;
