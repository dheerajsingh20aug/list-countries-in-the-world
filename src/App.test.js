import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Assignment', () => {
  const { getByText } = render(<App />);
  const heading = getByText(/Assignment - Country list & search/i);
  expect(heading).toBeInTheDocument();
});
