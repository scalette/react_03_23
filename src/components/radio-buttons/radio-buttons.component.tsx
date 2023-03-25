import React from 'react';
import RadioButton from './radio-button/check-box-entity.component';

class RadioButtons extends React.Component {
  constructor(props) {
    super(props);
    this.inputValue = React.createRef();
    this.inputValue2 = React.createRef();
  }
  render() {
    return (
      <div >
        <input type="radio" value="Male" name="gender" ref={this.inputValue}/> Male
        <input type="radio" value="Female" name="gender" ref={this.inputValue2}/> Female
        <input type="radio" value="Other" name="gender" /> Other
      </div>
    );
  }
}

export default RadioButtons;
