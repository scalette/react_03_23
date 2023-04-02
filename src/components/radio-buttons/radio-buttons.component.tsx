/* eslint-disable @typescript-eslint/ban-types */
import { InputProps } from '../../routes/types';

export const RadioButtons = ({ register }: InputProps) => {
  return (
    <div>
      <input type="radio" value="Male" defaultChecked {...register('gender')} /> Male
      <input type="radio" value="Female" {...register('gender')} /> Female
    </div>
  );
};
