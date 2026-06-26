import React, { Suspense } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

import { BrowserRouter, Route, Routes } from "react-router-dom";

const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ServiceDetailPage = React.lazy(() => import('./pages/ServiceDetailPage'));

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div></div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:key" element={<ServiceDetailPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;