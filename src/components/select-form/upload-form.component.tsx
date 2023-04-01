import React, { Component, RefObject } from 'react';
import { Componentprops } from '../radio-buttons/radio-buttons.component';

export default ({ setFruitProp }) => {
  return (
    <label>
      Pick a fruit:
      <select
        name="selectedFruit"
        defaultValue="orange"
        onChange={(e) => setFruitProp(e.target.value)}
      >
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </select>
    </label>
  );
};
