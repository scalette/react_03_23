/* eslint-disable @typescript-eslint/ban-types */
import React, { ComponentLifecycle } from 'react';
export type Componentprops<P = {}, S = {}> = ComponentLifecycle<P, S>;

export const RadioButtons = ({ setGenderProp }) => {
  return (
    <div onChange={(e) => setGenderProp(e.target.value)}>
      <input type="radio" value="Male" name="gender" defaultChecked /> Male
      <input type="radio" value="Female" name="gender" /> Female
    </div>
  );
};
