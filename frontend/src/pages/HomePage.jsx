import React from 'react';

import homeBackground from '../assets/images/home-bg.jpg';
import pageStyles from './PageStyles.module.css';

function HomePage() {
return (
  <div
    className={pageStyles.pageContainer}
    style={{ backgroundImage: `url(${homeBackground})` }}
  >
    <h2>Home Page</h2>
    <p>This is the home page, to assist with navigation</p>
    {/* components for home page navigation here */}
  </div>
);
}

export default HomePage;