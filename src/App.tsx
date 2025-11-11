import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import GamesPage from './pages/GamesPage';
import AboutPage from './pages/AboutPage';
import GamePlayersPage from './pages/GamePlayersPage';
import LoginPage from './pages/LoginPage';
import { usePageFocus } from './usePageFocus';

function App() {
  usePageFocus('Site Oficial - Tiamat');
  
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/*" element={
          <div className="min-h-screen bg-slate-900">
            <Header />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/games" element={<GamesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/games/:gameId/players" element={<GamePlayersPage />} />
            </Routes>
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;