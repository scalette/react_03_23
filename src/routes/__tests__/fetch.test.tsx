import { render, screen } from '@testing-library/react';
import ErrorPage from '../../error-page';
import About from '../about';

describe('expect to render cardComponent', () => {
  it('should be in the doc', () => {
    render(<ErrorPage />);
    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
  });
  it('should be in the doc', () => {
    render(<About />);
    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
  });
});
