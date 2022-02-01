import React, { Component } from "react";
import "./estilo.css";

class FormImput extends Component {
  render() {
    return (
      <div className="montarTimes_grupo container">
        <div className="montarTimes_grupo_container">
          <div className="montarTimes_input">
            <label for="jogador1" className="montarTimes_input-label">
              Jogador 01:
            </label>
            <input
              type="text"
              id="jogador1"
              className="montarTimes_input-1"
              required
            />
          </div>
          <div className="montarTimes_input">
            <label for="jogador2" className="montarTimes_input-label">
              Jogador 02:
            </label>
            <input
              type="text"
              id="jogador2"
              className="montarTimes_input-1"
              required
            />
          </div>
          <div className="montarTimes_input">
            <label for="jogador3" className="montarTimes_input-label">
              Jogador 03:
            </label>
            <input
              type="text"
              id="jogador3"
              className="montarTimes_input-1"
              required
            />
          </div>
          <div className="montarTimes_input">
            <label for="jogador4" className="montarTimes_input-label">
              Jogador 04:
            </label>
            <input
              type="text"
              id="jogador4"
              className="montarTimes_input-1"
              required
            />
          </div>
          <div className="montarTimes_input">
            <label for="jogador5" className="montarTimes_input-label">
              Jogador 05:
            </label>
            <input
              type="text"
              id="jogador5"
              className="montarTimes_input-1"
              required
            />
          </div>
        </div>
        <div className="montarTimes_grupo_container">
          <div className="montarTimes_input">
            <label for="jogador6" className="montarTimes_input-label">
              Jogador 06:
            </label>
            <input
              type="text"
              id="jogador6"
              className="montarTimes_input-1"
              required
            />
          </div>
          <div className="montarTimes_input">
            <label for="jogador7" className="montarTimes_input-label">
              Jogador 07:
            </label>
            <input
              type="text"
              id="jogador7"
              className="montarTimes_input-1"
              required
            />
          </div>
          <div className="montarTimes_input">
            <label for="jogador8" className="montarTimes_input-label">
              Jogador 08:
            </label>
            <input
              type="text"
              id="jogador8"
              className="montarTimes_input-1"
              required
            />
          </div>
          <div className="montarTimes_input">
            <label for="jogador9" className="montarTimes_input-label">
              Jogador 09:
            </label>
            <input
              type="text"
              id="jogador9"
              className="montarTimes_input-1"
              required
            />
          </div>
          <div className="montarTimes_input">
            <label for="jogador10" className="montarTimes_input-label">
              Jogador 10:
            </label>
            <input
              type="text"
              id="jogador10"
              className="montarTimes_input-1"
              required
            />
          </div>
        </div>
      </div>
    );
  }
}

export default FormImput;
