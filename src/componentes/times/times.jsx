import React, { Component } from "react";
import Atacantes from "./Atacantes/Atacantes";
import Defensores from "./Defensores/Defensores";
import "./estilo.css";

class Times extends Component {
  render() {
    return (
      <section className="times">
        <div className="times_container container">
          <h2 className="times_titulo">Times</h2>
          <div className="timesGerados">
            <div className="times_grupo container">
              <Atacantes />
              <Defensores />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Times;
