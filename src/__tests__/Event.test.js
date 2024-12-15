import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Event from '../components/Event';
import { descriptions } from 'jest-config';

const mockData = [
  {
    summary: 'Sample Title',
    created: '2024-12-15T10:00:00Z',
    location: 'Sample Location',
    description: 'Details about the event',
  },
];

describe('Event', () => {
  test("by default, event's details section should be hidden", () => {
    const { queryByText } = render(<Event event={mockData[0]} />);

    // not visible at start
    expect(queryByText(mockData[0].description)).not.toBeInTheDocument();
  });

  test("shows the details section when the user clicks on the 'show details' button", async () => {
    const { getByText, queryByText } = render(<Event event={mockData[0]} />);

    // click simulation
    fireEvent.click(getByText('show details'));

    // visible description
    expect(queryByText(mockData[0].description)).toBeInTheDocument();
  });

  test("hides the details section when the user clicks on the 'hide details' button", async () => {
    const { getByText, queryByText } = render(<Event event={mockData[0]} />);

    // click simulations
    fireEvent.click(getByText('show details'));

    // visible details
    expect(queryByText(mockData[0].description)).toBeInTheDocument();

    // hide details click simulation
    fireEvent.click(getByText('hide details'));

    // hide details
    expect(queryByText(mockData[0].description)).not.toBeInTheDocument();
  });
});
