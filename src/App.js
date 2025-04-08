import { Route, Routes } from 'react-router-dom';

// Importação dos componentes
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Importação das páginas
import Home from './paginas/home';
import NaoEncontrada from './components/NaoEncontrada/NaoEncontrada';

import './App.css';
import PageLandingPages from './components/LandingPages/LandingPages';

function App() {
  return (
    <div className="App">
      <Header />      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos/landing-pages" element={<PageLandingPages />} />

        <Route path="/*" element={<NaoEncontrada />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
