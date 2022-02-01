import React, { Component } from "react";
import FormImput from "./FormImput/FormImput";
import FormBtn from "./FormBtn/FormBtn";
import "./estilo.css";


class MontarTimes extends Component {
  render() {
    return (
      <section className="montarTimes">
        <div className="montarTimes_container container">
          <h2 className="montarTimes_titulo">Montar Times</h2>
          <form className="montarTimes_form">
            <FormImput />
            <FormBtn />
          </form>
        </div>
      </section>
    );
  }
}

export default MontarTimes;
