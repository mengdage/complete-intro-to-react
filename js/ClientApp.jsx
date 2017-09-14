import React from 'react';
// import PropTypes from 'prop-types';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './Landing';
import Search from './Search';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Route exact path="/" component={Landing} />
      <Route exact path="/search" component={Search} />
    </div>
  </BrowserRouter>
);

App.propTypes = {};

render(<App />, document.getElementById('app'));
