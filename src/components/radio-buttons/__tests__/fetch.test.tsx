import { render, screen } from '@testing-library/react';
import RadioButtons from '../radio-buttons.component';

describe('expect to render cardComponent', () => {
  it('render cardComponent', () => {
    render(<RadioButtons />);
    const element = screen.getByText(/Male/i);
    expect(element).toBeInTheDocument();
  });
});
