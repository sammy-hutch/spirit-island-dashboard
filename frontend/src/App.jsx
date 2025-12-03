import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import styles from './App.module.css'; 

import OverviewPage from './pages/OverviewPage';
import SpiritsPage from './pages/SpiritsPage';
import AdversariesPage from './pages/AdversariesPage';

function App() {
return (
  <Router>
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <h1>Spirit Island Dashboard</h1>
        {/* Navigation menu */}
        <nav>
          <ul>
            <li>
              <NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>Overview</NavLink>
            </li>
            <li>
              <NavLink to="/spirits" className={({ isActive }) => isActive ? "active-link" : ""}>Spirits</NavLink>
            </li>
            <li>
              <NavLink to="/adversaries" className={({ isActive }) => isActive ? "active-link" : ""}>Adversaries</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className="App-main-content">
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/spirits" element={<SpiritsPage />} />
          <Route path="/adversaries" element={<AdversariesPage />} />
          <Route path="*" element={<h2>404: Page Not Found</h2>} />
        </Routes>
      </main>
    </div>
  </Router>
);
}

export default App;