import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';

import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:key" element={<ServiceDetailPage />} />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;