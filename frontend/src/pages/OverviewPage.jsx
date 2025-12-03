import React from 'react';

import overviewBackground from '../assets/images/overview-bg.jpg';
import pageStyles from './PageStyles.module.css';

function OverviewPage() {
return (
  <div
      className={pageStyles.pageContainer}
      style={{ backgroundImage: `url(${overviewBackground})` }}
    >
    <h2>Dashboard Overview</h2>
    <p>This page will show overall game statistics like total games played, average score, win rates, etc.</p>
    {/* add more components here later */}
  </div>
);
}

export default OverviewPage;