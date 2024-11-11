import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import GamePage from './pages/GamePage';

function App() {
  return (
      <Router>
        <div className="App">
          <h1>Bienvenido al Bingo Online</h1>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/game" element={<GamePage />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;

