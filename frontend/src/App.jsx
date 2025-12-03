import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import styles from './App.module.css'; 

import { GiIsland, GiBroadheadArrow } from 'react-icons/gi';

import AdversariesPage from './pages/AdversariesPage';
import GamesPage from './pages/GamesPage';
import HomePage from './pages/HomePage';
import OverviewPage from './pages/OverviewPage';
import ScenariosPage from './pages/ScenariosPage';
import SpiritsPage from './pages/SpiritsPage';

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
                <GiIsland />
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/overview"
                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink}
              >
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/games"
                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink}
              >
                Games
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
            <li>
              <NavLink
                to="/scenarios"
                className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink}
              >
                Scenarios
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.mainContent}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/adversaries" element={<AdversariesPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/overview" element={<OverviewPage />} />
          <Route path="/scenarios" element={<ScenariosPage />} />
          <Route path="/spirits" element={<SpiritsPage />} />
          <Route path="*" element={<h2>404: Page Not Found</h2>} />
        </Routes>
      </main>
    </div>
  </Router>
);
}

export default App;