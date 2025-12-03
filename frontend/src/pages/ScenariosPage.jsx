import React from 'react';

import scenariosBackground from '../assets/images/scenarios-bg.jpg';
import pageStyles from './PageStyles.module.css';

function ScenariosPage() {
return (
  <div
      className={pageStyles.pageContainer}
      style={{ backgroundImage: `url(${scenariosBackground})` }}
    >
    <h2>Scenario Challenge Analysis</h2>
    <p>This page will show statistics related to different scenarios and their difficulty.</p>
    {/* components for scenario stats here */}
  </div>
);
}

export default ScenariosPage;