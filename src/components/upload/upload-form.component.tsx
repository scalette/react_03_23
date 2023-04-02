import React, { Component, RefObject } from 'react';
import { Componentprops } from '../radio-buttons/radio-buttons.component';

export default ({ register }) => {
  return <input className="uncontrolled=input" type="file" {...register('file')} />;
};
