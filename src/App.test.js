```jsx
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders personal website title', () => {
  render(<App />);
  const titleElement = screen.getByText(/سلام، من حسین هستم/i);
  expect(titleElement).toBeInTheDocument();
});
```