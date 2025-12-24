import React from "react";
import estilos from "./NaoEncontrada.module.css";
// import react icon de seta para voltar
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className={estilos.error}>
      <h1 style={{ fontSize: "80px" }}>404</h1>
      <h1>IH, FOI MAL! NÃO CONSEGUI ENCONTRAR ESSA PÁGINA</h1>
      <div>
      </div>
    </div>
  );
};

export default NotFound;
