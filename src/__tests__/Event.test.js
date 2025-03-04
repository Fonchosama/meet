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

  // exercise 5

  test("event's details are hidden by default", () => {
    const eventDetails = EventComponent.container.querySelector('.details');
    expect(eventDetails).not.toBeInTheDocument();
  });

  test('show details after user clicks on button "Show Details"', async () => {
    const user = userEvent.setup();

    const showDetailButton = EventComponent.queryByText('Show Details');
    await user.click(showDetailButton);

    const eventDetailsDom = EventComponent.container.firstChild;
    const eventDetails = eventDetailsDom.querySelector('.eventDetails');
    expect(eventDetails).toBeInTheDocument();
  });

  test('hide details after use clicks on button "Hide details', async () => {
    const user = userEvent.setup();

    const showDetailButton = EventComponent.queryByText('Show Details');
    await user.click(showDetailButton);

    const hideDetailButton = EventComponent.queryByText('Hide Details');
    await user.click(hideDetailButton);

    const eventDetailsDom = EventComponent.container.firstChild;
    const eventDetails = eventDetailsDom.querySelector('.eventDetails');
    expect(eventDetails).not.toBeInTheDocument();
  });
});
