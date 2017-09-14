import React from 'react';
// import PropTypes from 'prop-types';
import { render } from 'react-dom';

const App = () => (
  <div className="app">
    <div className="landing">
      <h1>Video</h1>
      <input type="text" placeholder="Search..." />
      <a>or Browser All</a>
    </div>
  </div>
);

App.propTypes = {};

render(<App />, document.getElementById('app'));
