const MyTitle = props =>
  React.createElement('div', null, React.createElement('h1', { style: { color: props.color } }, props.title));
const MyFirstComponent = () =>
  React.createElement(
    'div',
    { id: 'my-first-component' },
    React.createElement(MyTitle, {
      title: 'Game of Thrones',
      color: 'YellowGreen'
    }),
    React.createElement(MyTitle, {
      title: 'Stranger Things',
      color: 'GreenYellow'
    }),
    React.createElement(MyTitle, { title: 'Rick and Morty', color: '#123' }),
    React.createElement(MyTitle, {
      title: 'Silicon Valley',
      color: 'rgb(255, 0, 0)'
    })
  );

ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'));
