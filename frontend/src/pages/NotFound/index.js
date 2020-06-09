import React from "react";
import "./styles.css";

import logoImg from "../../assets/img/robot.svg";

export default function NotFound() {
  return (
    <div class="container">
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Nunito+Sans:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      ></link>
      <div class="not">
        <h1>
          <strong class="s404">404</strong>
          <span class="snot">Pagina não encontrada </span>
        </h1>
      </div>
      <div class="cimg">
        <img src={logoImg} alt="robot" />
      </div>
    </div>
  );
}
