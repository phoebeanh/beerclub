import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemberChart from './MemberChart';

describe('<MemberChart />', () => {
  test('it should mount', () => {
    render(<MemberChart />);
    
    const memberChart = screen.getByTestId('MemberChart');

    expect(memberChart).toBeInTheDocument();
  });
});