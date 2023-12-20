import { render, screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/Home';

describe('Home Testing', () => {
    test('1. Renders the Header component within Home', () => {
        render(
        <Router>
            <Home />
        </Router>
        );
        const headerElement = screen.getByTestId('header');
        expect(headerElement).toBeInTheDocument();
    });


    test('2. Renders "homepage" content within Home', () => {
        render(
        <Router>
            <Home />
        </Router>
        );
        const homepageDiv = screen.getByTestId('homepage');
        expect(homepageDiv).toBeInTheDocument();
    });

    test('3. Renders the Footer component within Home', () => {
        render(
        <Router>
            <Home />
        </Router>
        );
        const footer = screen.getByTestId("footer");
        expect(footer).toBeInTheDocument();
    });


});