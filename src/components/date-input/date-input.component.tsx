import React, { Component, RefObject } from 'react';
import { Componentprops } from '../radio-buttons/radio-buttons.component';

export default ({ setDateProp }) => {
  return <input type="date" onChange={(e) => setDateProp(e.target.value)} />;
};
