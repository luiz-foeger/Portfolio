import React, { useEffect, useState } from "react";
import { BsGraphUp, BsHourglassSplit, BsWallet2 } from "react-icons/bs";

import { buscarFilmesId } from "../../API/dadosAPI";
import Loading from "../Loading/Loading";
import estilos from "./Detalhes.module.css";

const DetalhesFilme = ({ id }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    buscarFilmesId(id).then(setMovie);
  }, [id]);

  const formatarValorDolar = (valor) => {
    return valor.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  function formatarDataBrasil(dataStr) {
    const data = new Date(dataStr);
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0"); // Janeiro é 0
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }

  function formatarDuracao(minutagemTotal) {
    const horas = Math.floor(minutagemTotal / 60);
    const minutos = minutagemTotal % 60;

    if (horas > 0 && minutos > 0) {
      return `${horas}h ${minutos}min`;
    } else if (horas > 0) {
      return `${horas} horas`;
    } else {
      return `${minutos} minutos`;
    }
  }

  if (!movie) {
    return <Loading />;
  }

  return (
    <div className={estilos.detalhesFilme}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={`Cartaz do filme ${movie.title}`}
      />
      <h2 className={estilos.avaliacaoFilme}>
        {movie.vote_average.toFixed(1)}
      </h2>
      <img
        className={estilos.imgFundo}
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={`Cartaz de fundo do filme ${movie.title}`}
      />
      <div>
        <h1>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </h1>
        <span>{movie.tagline}</span>

        <h3>Data de Lançamento:</h3>
        <p>{formatarDataBrasil(movie.release_date)}</p>

        <h3>Sinopse:</h3>
        <p>{movie.overview}</p>

        <h3>
          <BsWallet2 /> Orçamento:
        </h3>
        <p>
          {formatarValorDolar(movie.budget) === "$0.00"
            ? "Sem Informações"
            : formatarValorDolar(movie.budget)}
        </p>

        <h3>
          <BsGraphUp /> Faturamento:
        </h3>
        <p>
          {formatarValorDolar(movie.revenue) === "$0.00"
            ? "Sem Informações"
            : formatarValorDolar(movie.revenue)}
        </p>

        <h3>
          <BsHourglassSplit /> Duração:
        </h3>
        <p>{formatarDuracao(movie.runtime)}</p>
      </div>
    </div>
  );
};

export default DetalhesFilme;
