import React, { RefObject } from 'react';
import { Componentprops } from '../radio-buttons/radio-buttons.component';
import ChackBoxEntity from './check-box-entity/check-box-entity.component';

const CheckBox = ({setPermitionsProp}) => {
  return (
    <div>
      <ChackBoxEntity fieldName={'read'} setPermitionsProp={setPermitionsProp} />
      <ChackBoxEntity fieldName={'write'} setPermitionsProp={setPermitionsProp} />
      <ChackBoxEntity fieldName={'execute'} setPermitionsProp={setPermitionsProp} />
    </div>
  );
};

export default CheckBox;
