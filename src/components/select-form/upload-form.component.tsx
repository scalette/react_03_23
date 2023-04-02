import React, { Component, RefObject } from 'react';
import { Componentprops } from '../radio-buttons/radio-buttons.component';

export default ({ register }) => {
  return (
    <label>
      Pick a fruit:
      <select name="selectedFruit" defaultValue="orange" {...register('fruit')}>
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
    </label>
  );
};
