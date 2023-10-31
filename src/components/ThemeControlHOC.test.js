import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ThemeControlHOC from './ThemeControlHOC'

test('Check the existence of h2 tag in the home component', () => {
    render(<ThemeControlHOC />);
    const homePageText = screen.getByText(/Dark - Light Mode From Home Component/i);
    expect(homePageText).toBeInTheDocument();
});

test('Component renders initially with light theme', () => {
    render(<ThemeControlHOC />);
    const lightTheme = screen.getByText(/The current theme is: Light/i);
    expect(lightTheme).toBeInTheDocument();
});

test('The button is toggled between the light and dark themes when clicked', () => {
    render(<ThemeControlHOC />);
    const toggleBtn = screen.getByRole('button', { name: /Toggle Theme/i });
    const lightTheme = screen.getByText(/The current theme is: Light/i);
    expect(lightTheme).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    const darkTheme = screen.getByText(/The current theme is: Dark/i);
    expect(darkTheme).toBeInTheDocument();
});

test('Check the image src in light theme', () => {
    render(<ThemeControlHOC />);
    const image = screen.getByRole('img', { name: /moon\/sun/ });
    expect(image.src).toContain('sun.gif');
});

test('Check the image src after toggling to dark theme', () => {
    render(<ThemeControlHOC />);
    const toggleBtn = screen.getByRole('button', { name: /Toggle Theme/i });
    fireEvent.click(toggleBtn);
    const image = screen.getByRole('img', { name: /moon\/sun/ });
    expect(image.src).toContain('moon.gif');
});