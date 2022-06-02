import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from '../../components/navbar';

it('matches Navbar snapshot', () => {
  const tree = renderer.create(
    <Navbar />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
