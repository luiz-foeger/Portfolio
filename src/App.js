import { Route, Routes } from 'react-router-dom';

// Importação dos componentes
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Importação das páginas
import Home from './paginas/home';
import NotFound from './components/NaoEncontrada/NotFound';
import PageLandingPages from './components/LandingPages/LandingPages';
import PageCatalogos from './components/Catalogos/Catalogos';
import PageEcommerce from './components/Ecommerce/Ecommerce';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos/landing-pages" element={<PageLandingPages />} />
        <Route path="/projetos/catalogos" element={<PageCatalogos />} />
        <Route path="/projetos/e-commerce" element={<PageEcommerce />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
