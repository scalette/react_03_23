import React, { Component, RefObject } from 'react';
import { Componentprops } from '../radio-buttons/radio-buttons.component';

class DatePicker extends Component {
  inputValue: RefObject<HTMLInputElement>;
  constructor(props: Componentprops) {
    super(props);
    this.inputValue = React.createRef<HTMLInputElement>();
  }

  render() {
    return <input type="date" ref={this.inputValue} />;
  }
}

export default DatePicker;
