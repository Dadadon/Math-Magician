import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/pages/Quote';

it('renders Quotes correctly', () => {
  const tree = renderer.create(<Quote />);
  expect(tree).toMatchSnapshot();
});
