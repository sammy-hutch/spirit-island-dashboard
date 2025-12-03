import React from 'react';

import spiritsBackground from '../assets/images/spirits-bg.webp';
import pageStyles from './PageStyles.module.css';

import SpiritIslandData from '../components/SpiritIslandData';

function SpiritsPage() {
return (
  <div
      className={pageStyles.pageContainer}
      style={{ backgroundImage: `url(${spiritsBackground})` }}
    >
    <h2>Spirit Performance Deep Dive</h2>
    <p>This page details the performance of individual spirits.</p>
    <SpiritIslandData />
  </div>
);
}

export default SpiritsPage;