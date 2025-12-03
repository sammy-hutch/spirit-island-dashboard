import React from 'react';

import adversariesBackground from '../assets/images/adversaries-bg.jpg';
import pageStyles from './PageStyles.module.css';

function AdversariesPage() {
return (
  <div
      className={pageStyles.pageContainer}
      style={{ backgroundImage: `url(${adversariesBackground})` }}
    >
    <h2>Adversary Challenge Analysis</h2>
    <p>This page will show statistics related to different adversaries and their difficulty.</p>
    {/* components for adversary stats here */}
  </div>
);
}

export default AdversariesPage;