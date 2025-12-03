import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './App.module.css'; 

import { GiBroadheadArrow, GiIsland, GiPerspectiveDiceSixFacesOne, GiPodium, GiSparkSpirit, GiSpookyHouse, GiTribalShield } from './assets/icons';

import AdversariesPage from './pages/AdversariesPage';
import GamesPage from './pages/GamesPage';
import HomePage from './pages/HomePage';
import OverviewPage from './pages/OverviewPage';
import ScenariosPage from './pages/ScenariosPage';
import SpiritsPage from './pages/SpiritsPage';

const pages = [
  { path: '/', name: 'Home', component: HomePage, icon: <GiIsland /> },
  { path: '/overview', name: 'Overview', component: OverviewPage, icon: <GiPodium /> },
  { path: '/games', name: 'Games', component: GamesPage, icon: <GiPerspectiveDiceSixFacesOne /> },
  { path: '/spirits', name: 'Spirits', component: SpiritsPage, icon: <GiSparkSpirit /> },
  { path: '/adversaries', name: 'Adversaries', component: AdversariesPage, icon: <GiSpookyHouse /> },
  { path: '/scenarios', name: 'Scenarios', component: ScenariosPage, icon: <GiTribalShield /> },
]

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentIndex = pages.findIndex(page => page.path === location.pathname);
  const isFirstPage = currentIndex === 0;
  const isLastPage = currentIndex === pages.length - 1;

  const handlePrev = () => {
    if (!isFirstPage) {
      navigate(pages[currentIndex - 1].path);
    }
  };

  const handleNext = () => {
    if (!isLastPage) {
      navigate(pages[currentIndex + 1].path);
    }
  };

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <h1>Spirit Island Dashboard</h1>
        {/* Navigation menu */}
        <nav className={styles.mainNav}>
          <button
            onClick={handlePrev}
            disabled={isFirstPage}
            className={`${styles.navArrow} ${isFirstPage ? styles.navArrowDisabled : ''}`}
            aria-label='Previous Page'
          >
            <GiBroadheadArrow className={styles.rotateLeft} />
          </button>

          <ul className={styles.nav}>
            {pages.map((page) => (
              <li key={page.path}>
                <NavLink
                  to={page.path}
                  end={page.path === '/'}
                  className={({ isActive }) => isActive ? `${styles.navLink} ${styles.activeNavLink}` : styles.navLink}
                >
                  {page.icon ? page.icon : page.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            onClick={handleNext}
            disabled={isLastPage}
            className={`${styles.navArrow} ${isLastPage ? styles.navArrowDisabled : ''}`}
            aria-label="Next Page"
          >
            <GiBroadheadArrow className={styles.rotateRight} />
          </button>
        </nav>
      </header>

      <main className={styles.mainContent}>
        <Routes>
          {pages.map(page => (
            <Route key={page.path} path={page.path} element={<page.component />} />
          ))}
          <Route path="*" element={<h2>404: Page Not Found</h2>} />
        </Routes>
      </main>
    </div>
  );
}

function AppWithRouter() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <App />
    </Router>
  );
}

export default AppWithRouter;