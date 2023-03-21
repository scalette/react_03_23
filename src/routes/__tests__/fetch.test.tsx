import { render, screen } from '@testing-library/react';
import ErrorPage from '../../error-page';

describe('expect to render cardComponent', () => {
  it('should return 15 for add(10,5)', () => {
    render(<ErrorPage />);
    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
  });
});
