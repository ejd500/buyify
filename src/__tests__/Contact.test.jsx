import { render, screen} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Contact from '../components/Contact';

describe('Contact Page Testing', () => {
  test('1. testing whether the form is there', () => {
    // Render the Contact component
    render(
      <Router>
        <Contact/>
      </Router>
    );
    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();
  
  });

  test('2. testing whether the h1 "Contact" is there', () => {
    // Render the Contact component
    render(
      <Router>
        <Contact/>
      </Router>
    );
    const h1Element = screen.getByRole("heading", { name: "Contact" });
    expect(h1Element).toBeInTheDocument();
  
  });

  test('3. testing whether the h2 "Stay In Touch" is there', () => {
    // Render the Contact component
    render(
      <Router>
        <Contact/>
      </Router>
    );
    const h2Element = screen.getByRole("heading", { name: "Stay In Touch" });
    expect(h2Element).toBeInTheDocument();
  
  });

});