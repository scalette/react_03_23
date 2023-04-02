import { render, screen } from '@testing-library/react';
import { RadioButtons } from '../radio-buttons.component';
import { useForm } from 'react-hook-form';
import { Inputs } from '../../forms/forms.type';

describe('expect to render cardComponent', () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      name: '',
      permitions: [null, null, null],
      gender: 'Male',
      fruit: 'orange',
    },
  });
  it('render cardComponent', () => {
    render(<RadioButtons register={register} />);
    const element = screen.getByText(/Male/i);
    expect(element).toBeInTheDocument();
  });
});
