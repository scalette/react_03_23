/* eslint-disable @typescript-eslint/ban-types */
import React, { ComponentLifecycle } from 'react';
export type Componentprops<P = {}, S = {}> = ComponentLifecycle<P, S>;

export const RadioButtons = ({ register }) => {
  return (
    <div>
      <input type="radio" value="Male" name="gender" defaultChecked {...register('gender')} /> Male
      <input type="radio" value="Female" name="gender" {...register('gender')} /> Female
    </div>
  );
};
