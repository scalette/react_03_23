import { InputProps } from '../../routes/types';

export default ({ register }: InputProps) => {
  return (
    <input
      className="uncontrolled=input"
      type="file"
      {...register('file', { required: 'File is required' })}
    />
  );
};
