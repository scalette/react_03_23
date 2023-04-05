import { InputProps } from '../../routes/types';

export default ({ register }: InputProps) => {
  return <input type="date" {...register('date', { required: 'Date is required' })} />;
};
