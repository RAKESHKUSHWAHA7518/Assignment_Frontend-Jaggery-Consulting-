import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import LandPage from '../page/LandPage';
import WaterPage from '../page/WaterPage';
import KidsPage from '../page/KidsPage';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/land" element={<LandPage />} />
        <Route path="/water" element={<WaterPage />} />
        <Route path="/kids" element={<KidsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
