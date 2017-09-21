// @flow

import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="landing">
    <h1>Video</h1>
    <input type="text" placeholder="Search..." />
    <Link to='/search'>or Browser All</Link>
  </div>
);

export default Landing;
