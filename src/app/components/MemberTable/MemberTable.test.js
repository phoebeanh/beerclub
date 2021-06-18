import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MemberTable from './MemberTable';

describe('<MemberTable />', () => {
  test('it should mount', () => {
    render(<MemberTable />);
    
    const memberTable = screen.getByTestId('MemberTable');

    expect(memberTable).toBeDefined();
  });
});