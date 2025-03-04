// src/__tests__/NumberOfEvents.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Simula eventos del usuario
import NumberOfEvents from '../components/NumberOfEvents';

describe('<NumberOfEvents /> component', () => {
  test('renders an input with role "spinbutton"', () => {
    render(<NumberOfEvents />);
    const inputElement = screen.getByRole('spinbutton'); // Cambiado a "spinbutton"
    expect(inputElement).toBeInTheDocument();
  });

  test('default value of the input is 32', () => {
    render(<NumberOfEvents />);
    const inputElement = screen.getByRole('spinbutton'); // Cambiado a "spinbutton"
    expect(inputElement.value).toBe('32'); // Los valores en inputs son strings
  });

  test('value changes when user types', async () => {
    const setCurrentNOE = jest.fn(); // Crear una función ficticia
    const user = userEvent.setup();
    render(<NumberOfEvents setCurrentNOE={setCurrentNOE} />); // Pasar la función mock como prop
    const inputElement = screen.getByRole('spinbutton');
    await user.type(inputElement, '{backspace}{backspace}10'); // Simula escribir "10"
    expect(inputElement.value).toBe('10'); // Verifica el nuevo valor
    expect(setCurrentNOE).toHaveBeenCalledWith(10); // Verifica que la función se haya llamado con el valor correcto
  });
});
