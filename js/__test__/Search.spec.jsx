import React from 'react';
import { shallow } from 'enzyme';

import Search from '../Search';
import ShowCard from '../ShowCard';
import preload from '../../data.json';

test('Search should render correctly', () => {
  const component = shallow(<Search />);
  expect(component).toMatchSnapshot();
});

test('Search should render all cards', () => {
  const component = shallow(<Search />);
  const cardsNum = preload.shows.length;
  expect(component.find(ShowCard).length).toEqual(cardsNum);
});

test('Search should render correct number of cards', () => {
  const component = shallow(<Search />);
  const searchTerm = 'black';
  const cardsNum = preload.shows.filter(
    show => show.title.toLowerCase().indexOf(searchTerm) > -1 || show.description.toLowerCase().indexOf(searchTerm) > -1
  ).length;

  component.find('input').simulate('change', { target: { value: searchTerm } });
  expect(component.find(ShowCard).length).toEqual(cardsNum);
});
