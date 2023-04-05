import { InputProps } from '../../routes/types';

export default ({ register }: InputProps) => {
  return (
    <label>
      Pick a fruit:
      <select defaultValue="orange" {...register('fruit')}>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
    </label>
  );
};
