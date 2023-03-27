import { render, screen } from '@testing-library/react';
import SelectForm from '../upload-form.component';

describe('expect to render cardComponent', () => {
  it('render cardComponent', () => {
    render(<SelectForm />);
    const element = screen.getByText(/apple/i);
    expect(element).toBeInTheDocument();
  });
});
