import '@testing-library/jest-dom';
import { render} from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  expect(App).toBeTruthy();
});
