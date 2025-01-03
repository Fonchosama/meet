import Event from '../components/Event';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import mockData from '../mock-data';
import React, { useState } from 'react';

const event = mockData[0];

describe('<Event /> component', () => {
  let EventComponent;
  beforeEach(() => {
    EventComponent = render(<Event event={event} />);
  });

  test('renders event title', () => {
    const eventTitle = EventComponent.queryByText(event.summary);
    expect(eventTitle).toBeInTheDocument();
  });

  test('renders event start time', () => {
    const eventTime = EventComponent.queryByText(event.created);
    expect(eventTime).toBeInTheDocument();
  });

  test('renders event location', () => {
    const eventLocation = EventComponent.queryByText(event.location);
    expect(eventLocation).toBeInTheDocument();
  });

  // Show Details button
  test('renders event details button with the title (show details)', () => {
    const detailButton = EventComponent.queryByText('Show Details');
    expect(detailButton).toBeInTheDocument();
  });
});
