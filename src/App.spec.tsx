import { act, render, screen } from '@testing-library/react';
import App from './App';

describe('User', () => {
  test('renders successfully', () => {
    render(<App />);

    const textSection = screen.getByTestId('app-text-section');
    expect(textSection).toBeInTheDocument();
  });

  test('allows the user to increment the counter', () => {
    render(<App />);

    const counterBtn = screen.getByTestId('app-counter-button');
    expect(counterBtn).toBeInTheDocument();
    expect(counterBtn).toHaveTextContent('count is 0');

    act(() => counterBtn.click());

    expect(counterBtn).toHaveTextContent('count is 1');
  });
});
