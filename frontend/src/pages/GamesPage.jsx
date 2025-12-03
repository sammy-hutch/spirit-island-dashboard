import React from 'react';

import gamesBackground from '../assets/images/games-bg.jpg';
import pageStyles from './PageStyles.module.css';

function GamesPage() {
return (
  <div
      className={pageStyles.pageContainer}
      style={{ backgroundImage: `url(${gamesBackground})` }}
    >
    <h2>Games Overview</h2>
    <p>This page will show statistics related to games.</p>
    {/* components for game stats here */}
  </div>
);
}

export default GamesPage;