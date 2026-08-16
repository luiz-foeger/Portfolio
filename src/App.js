import { Route, Routes } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './pages/Home';

import './App.css';
import Links from './pages/Links';
import { CursorProvider } from './components/ui/CursorContext';
import { CustomCursor } from './components/ui/CustomCursor';
import SmoothScroll from './components/ui/SmoothScroll';

function App() {
  return (
    <SmoothScroll>
    <CursorProvider>
    <CustomCursor />
    <div className="App">
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/links" element={<Links />} />

        {/* <Route path="/services/digital-products" element={<DigitalProducts />} /> */}
        {/* <Route path="/services/web-prototyping" element={<WebPrototyping />} /> */}
        {/* <Route path="/services/graphic-visuals" element={<GraphicVisuals />} /> */}
        {/* <Route path="/services/experimental-lab" element={<ExperimentalLab />} /> */}
        
      </Routes>
      <Footer />
    </div>
    </CursorProvider>
    </SmoothScroll>
  );
}

export default App;
