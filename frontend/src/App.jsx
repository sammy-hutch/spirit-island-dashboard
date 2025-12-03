import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import styles from './App.module.css'; 

import OverviewPage from './pages/OverviewPage';
import SpiritsPage from './pages/SpiritsPage';
import AdversariesPage from './pages/AdversariesPage';

function App() {
return (
  <Router>
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <h1>Spirit Island Dashboard</h1>
        {/* Navigation menu */}
        <nav>
          <ul className={styles.nav}>
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink}
              >
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/spirits"
                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink}
              >
                Spirits
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/adversaries"
                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink}
              >
                Adversaries
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.mainContent}>
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