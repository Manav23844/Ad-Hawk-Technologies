import { render, screen } from '@testing-library/react';
import App from './App';

test('renders marketing landing page sections', () => {
  render(<App />);
  expect(screen.getByText(/Our Services/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
});
