import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../../components/quote';

it('matches Quote snapshot', () => {
  const tree = renderer.create(
    <Quote />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
