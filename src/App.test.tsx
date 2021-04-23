import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders monproweb link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Thomas Erhel/i);
  expect(linkElement).toBeInTheDocument();
});
