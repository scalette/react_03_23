/* eslint-disable @typescript-eslint/ban-types */
import React, { ComponentLifecycle, RefObject } from 'react';
export type Componentprops<P = {}, S = {}> = ComponentLifecycle<P, S>;
class RadioButtons extends React.Component {
  male: RefObject<HTMLInputElement>;
  female: RefObject<HTMLInputElement>;
  constructor(props: Componentprops) {
    super(props);
    this.male = React.createRef<HTMLInputElement>();
    this.female = React.createRef<HTMLInputElement>();
  }
  render() {
    return (
      <div>
        <input type="radio" value="Male" name="gender" defaultChecked ref={this.male} /> Male
        <input type="radio" value="Female" name="gender" ref={this.female} /> Female
      </div>
    );
  }
}

export default RadioButtons;
