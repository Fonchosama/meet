import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberOfEvents from '../components/NumberOfEvents';

describe('NumberOfEvents Component', () => {
  test('renders an input field with the role of textbox', () => {
    const { getByRole } = render(<NumberOfEvents />);
    const input = getByRole('textbox');
    expect(input).toBeInTheDocument();
  });

  test('default value of input field is 32', () => {
    const { getByRole } = render(<NumberOfEvents />);
    const input = getByRole('textbox');
    expect(input.value).toBe('32'); // Comprobamos que el valor inicial es 32
  });

  test('input value changes when the user types in it', async () => {
    const user = userEvent.setup();
    const { getByRole } = render(<NumberOfEvents />);
    const input = getByRole('textbox');

    // Simula que el usuario borra el valor predeterminado y escribe "10"
    await user.type(input, '{backspace}{backspace}10');
    expect(input.value).toBe('10'); // Verifica que el valor cambió a 10
  });
});
