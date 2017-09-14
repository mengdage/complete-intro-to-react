import React from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

const MyTitle = props => (
  <div>
    <h1 style={{ color: props.color }}>{props.title}</h1>
  </div>
);

MyTitle.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

const MyFirstComponent = () => (
  <div id="my-first-component">
    <MyTitle title="Game of Thrones" color="YellowGreen" />
    <MyTitle title="Stranger Things" color="GreenYellow" />
    <MyTitle title="Rick and Morty" color="#123" />
    <MyTitle title="Silicon Valley" color="rgb(255, 0,0 )" />
  </div>
);

render(React.createElement(MyFirstComponent), document.getElementById('app'));
