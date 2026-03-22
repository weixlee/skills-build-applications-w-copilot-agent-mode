import { render, screen } from '@testing-library/react';
import App from './App';

test('renders octofit tracker brand', () => {
  render(<App />);
  const brandElement = screen.getAllByText(/octofit tracker/i)[0];
  expect(brandElement).toBeInTheDocument();
});
