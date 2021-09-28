import '@testing-library/jest-dom';
import { render} from '@testing-library/react';
import App from './App';

test('renders app', () => {
    expect(App).toBeTruthy();
});

test('imports data from datasource', () => {
    render(<App />);
});
