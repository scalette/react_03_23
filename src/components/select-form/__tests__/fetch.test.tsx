import { render, screen } from '@testing-library/react';
import { useForm } from 'react-hook-form';
import { Inputs } from '../../forms/forms.type';
import SelectForm from '../upload-form.component';

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
    render(<SelectForm register={register} />);
    const element = screen.getByText(/apple/i);
    expect(element).toBeInTheDocument();
  });
});
