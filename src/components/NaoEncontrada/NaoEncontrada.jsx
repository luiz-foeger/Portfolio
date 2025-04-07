import React from "react";
import estilos from "./NaoEncontrada.module.css";
import erro from '../../img/sponge.gif'

const NaoEncontrada = () => {
  return (
    <div className={estilos.error}>
      <h1 style={{ fontSize: "80px" }}>404</h1>
      <h1>OPS! NÃO ENCONTRAMOS ESSA PÁGINA</h1>
      <img src={erro} alt="Gif Erro" />
      <p>
        A página que você está procurando pode ter sido removida ou está temporariamente indisponível. Por favor, verifique a URL e tente novamente.
      </p>
      <div>
        <button onClick={() => window.history.back()}>Voltar</button>
        <button onClick={() => window.location.reload()}>Recarregar</button>
      </div>
    </div>
  );
};

export default NaoEncontrada;
