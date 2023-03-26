import React, { Component, RefObject } from 'react';
import { Componentprops } from '../radio-buttons/radio-buttons.component';

class SelectForm extends Component {
  inputValue: RefObject<HTMLSelectElement>;
  constructor(props: Componentprops) {
    super(props);
    this.inputValue = React.createRef<HTMLSelectElement>();
  }
  render() {
    return (
      <label>
        Pick a fruit:
        <select name="selectedFruit" defaultValue="orange" ref={this.inputValue}>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </label>
    );
  }
}

export default SelectForm;
