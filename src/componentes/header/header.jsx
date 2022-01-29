import React, { Component } from "react";
import "./estilo.css";

class Header extends Component {
  render() {
    return (
        <header className="cabecalho">
            <div className="container">
                <h1 className="cabecalho_titulo">Team Maker Application</h1>
                <nav className="cabecalho_nav">
                    <a className="cabecalho_nav_link" href="#">Sobre</a>
                    <a className="cabecalho_nav_link" href="#">Team Maker</a>
                    <a className="cabecalho_nav_link" href="#">Patch Notes</a>
                    <a className="cabecalho_nav_link" href="#">Contato</a>
                </nav>
            </div>
        </header>
    );
  }
}

export default Header;
