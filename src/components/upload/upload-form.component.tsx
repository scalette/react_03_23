import React, { Component, RefObject } from 'react';
import { Componentprops } from '../radio-buttons/radio-buttons.component';

export default ({ setFileProp }) => {
  return (
    <input
      className="uncontrolled=input"
      type="file"
      onInput={(e) => setFileProp(e.target.value)}
    />
  );
};
