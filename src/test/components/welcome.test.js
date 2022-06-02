import React from 'react';
import renderer from 'react-test-renderer';
import Welcome from '../../components/welcome';

it('matches Welcome snapshot', () => {
  const tree = renderer.create(
    <Welcome />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
