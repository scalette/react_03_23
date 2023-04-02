import React, { Component, RefObject } from 'react';
import { Componentprops } from '../radio-buttons/radio-buttons.component';

export default ({ register }) => {
  return <input type="date" {...register('date')} />;
};
