import React, { Component } from "react";
import "./estilo.css";

class Header extends Component {
  render() {
    return (
      <header className="cabecalho">
        <div className="cabecalho_container container">
          <h1 className="cabecalho_titulo">Team Maker Application</h1>
          <nav className="cabecalho_nav">
            <ul className="cabecalho_nav_list">
              <li className="cabecalho_nav_item">
                <a href="#sobre">Sobre</a>
              </li>
              <li className="cabecalho_nav_item">
                <a href="#teamMaker">Montar Times</a>
              </li>
              <li className="cabecalho_nav_item">
                <a href="#patch_Notes">Patch Notes</a>
              </li>
              <li className="cabecalho_nav_item">
                <a href="#contato">Contato</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
