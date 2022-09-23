import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../components/pages/Home'


it('renders Home correctly', () => {
  const tree = renderer.create(<Home />);
  expect(tree).toMatchSnapshot();
});