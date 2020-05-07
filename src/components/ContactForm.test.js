import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ContactForm from './ContactForm';

test('form can filled in and submitted', () => {
    // render the ContactForm component
    const { getByLabelText, getByTestId } = render(<ContactForm />)
    // query for the form fields - First Name, Last Name, Email, Message
    const firstNameInput = getByLabelText(/first name*/i) 
    const lastNameInput = getByLabelText(/last name*/i)
    const emailInput = getByLabelText(/email/i)
    const submitButton = getByTestId(/submit/i)
    // assert that all form fields are rendered
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    // automate
    fireEvent.change(firstNameInput, { target: { value: 'Holttasdfasd' } })
    fireEvent.change(lastNameInput, { target: { value: 'Holttd' } })
    fireEvent.change(emailInput, { target: { value: 'Holt@holt.com' } })
    fireEvent.submit(submitButton)
})