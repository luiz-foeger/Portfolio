// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// import { FaStar } from 'react-icons/fa';

// import { leituraAPI, URL_API, API_KEY } from '../../API/dadosAPI';
// // import estilos from '../FilmesLancamentos/Lancamentos.module.css';

// function FilmesPopulares() {
//     const [dados, setDados] = useState([]);
//     const navigate = useNavigate();
//     const consultaAPI = '/movie/top_rated?language=pt-BR&';
//     // const consultaAPI = '/movie/top_rated?language';

//     const genres = {
//         28: "Ação",
//         12: "Aventura",
//         16: "Animação",
//         35: "Comédia",
//         80: "Crime",
//         99: "Documentário",
//         18: "Drama",
//         10751: "Família",
//         14: "Fantasia",
//         36: "História",
//         27: "Terror",
//         10402: "Música",
//         9648: "Mistério",
//         10749: "Romance",
//         878: "Ficção",
//         10770: "Cinema TV",
//         53: "Thriller",
//         10752: "Guerra",
//         37: "Faroeste"
//     };

//     const buscarFilmes = async () => {
//         try {
//             const response = await fetch(`${URL_API}${consultaAPI}${API_KEY}`, leituraAPI);
//             const dadosJson = await response.json();
//             setDados(dadosJson.results);
//         } catch (error) {
//             alert('Erro ao buscar Dados da API');
//             console.error('Erro ao buscar Dados da API:', error);
//         }
//     };

//     useEffect(() => { buscarFilmes(); }, []);

//     return (
//         <>
//             <nav className={estilos.nav}>
//                 <h2 className={estilos.tituloPagina}>Aclamados pela crítica</h2>
//                 <Link to="/populares">Ver tudo</Link>
//             </nav>

//             <div className={estilos.containerFilmes}>
//                 <div className={estilos.filmes}>
//                     {dados.map((movie) =>
//                         <div onClick={() => navigate(`/detalhes/${movie.id}`)} key={movie.id} className={estilos.cardFilme}>
//                             <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={`Cartaz do filme ${movie.title}`} />
//                             <div className={estilos.infoFilme}>
//                                 <h3>{movie.title}</h3>
//                                 <p>{movie.genre_ids.map(id => genres[id] || "Desconhecido").join(", ")}</p>
//                                 <section>
//                                     <p><FaStar />{movie.vote_average.toFixed(1)}</p>
//                                     <p>{movie.release_date.slice(0, 4)}</p>
//                                 </section>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </>
//     )
// }

// export default FilmesPopulares;