import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { SearchPage } from './components/SearchPage/SearchPage';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import { PokemonDetail } from './components/PokemonDetail/PokemonDetail';
import { Header } from './components/Header/Header';

const App: React.FC = () => {
  return (
    <Router basename="/pokemon">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/pokemon" />} />
        <Route path="/pokemon" element={<SearchPage />} />
        <Route path="/pokemon/:id" element={<PokemonDetail />} />
        <Route path="/not_found" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
