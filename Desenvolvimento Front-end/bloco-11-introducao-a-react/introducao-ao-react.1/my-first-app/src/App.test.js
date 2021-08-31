import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a task item', () => {
  render(<App />);
  const taskElement = screen.getByText(/buy/i);
  expect(taskElement).toBeInTheDocument();
});
