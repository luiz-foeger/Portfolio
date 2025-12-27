import { Route, Routes } from 'react-router-dom';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './pages/Home';

import './App.css';
import Links from './pages/Links';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<Home />} />
        <Route path="/links" element={<Links />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
