import { render, screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('Header Testing', () => {
  test('1. testing whether logo is there', () => {
    // Render the Header component
    render(
      <Router>
        <Header/>
      </Router>
    );
    const logoElement = screen.getByTestId("logo");
    expect(logoElement).toBeInTheDocument();
  
  });

  test('2. testing whether nav is there', () => {
    // Render the Header component
    render(
      <Router>
        <Header/>
      </Router>
    );
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });

  test('3. testing whether phone-email-checkout div is there', () => {
    // Render the Header component
    render(
      <Router>
        <Header/>
      </Router>
    );
    const phoneEmailCheckoutDiv = screen.getByTestId("phone-email-checkout");
    expect(phoneEmailCheckoutDiv).toBeInTheDocument();
  });

});