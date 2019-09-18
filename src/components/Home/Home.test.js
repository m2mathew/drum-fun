// External Dependencies
import React from 'react';
import { fireEvent, render, wait } from '@testing-library/react-native';

// Internal Dependencies
import Home from './index';

// Begin Tests
test('should render Home', async () => {
  // const { getByText } = render(<Home {...props} />);
  const { baseElement, getByText, queryByTestId } = render(<Home />);

  console.log('baseElement', baseElement);

  const button = getByText('Load a Rudiment');
  fireEvent.press(button);

  await wait(() => expect(queryByTestId('printed-username')).toBeTruthy());

  expect(baseElement).toMatchSnapshot();

  expect(getByTestId('home-wrapper').props.children).toHaveLength(1);
});
