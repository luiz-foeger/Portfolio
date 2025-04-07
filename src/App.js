import { Route, Routes } from 'react-router-dom';

// Importação dos componentes
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import NaoEncontrada from './components/NaoEncontrada/NaoEncontrada';

// Importação das páginas
import Home from './paginas/home';
import PaginaLancamentos from './paginas/lancamentos';
import PaginaDetalhes from './paginas/detalhes';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/lancamentos" element={<PaginaLancamentos />} />
        <Route path="/populares" element={<PaginaPopulares />} />
        <Route path="/recomendados" element={<PaginaRecomendados />} />
        <Route path="/detalhes/:id" element={<PaginaDetalhes />} /> */}
        <Route path="/*" element={<NaoEncontrada />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
