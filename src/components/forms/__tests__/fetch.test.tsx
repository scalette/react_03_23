import { render, screen } from '@testing-library/react';
import Forms from '../forms.component';

describe('expect to render cardComponent', () => {
  it('render cardComponent', () => {
    render(<Forms />);
    const element = screen.getByRole('button');
    expect(element).toBeInTheDocument();
  });
});
