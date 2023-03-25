import React from 'react';

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
    this.inputValue = React.createRef();
  }
  render() {
    return (
      <div className="RadioButton">
        <input ref={this.inputValue} type='radio'/>
        <label />
      </div>
    );
  }
}

export default RadioButton;
