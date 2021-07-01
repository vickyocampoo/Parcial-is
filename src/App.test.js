import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Seguinos link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Seguinos/i);
  expect(linkElement).toBeInTheDocument();
});
