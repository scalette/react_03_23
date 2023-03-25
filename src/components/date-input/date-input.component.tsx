import React, { Component } from 'react';

class DatePicker extends Component {
  constructor(props) {
    super(props);
    this.inputValue = React.createRef();
  }

  render() {
    return <input type="date" ref={this.inputValue} />;
  }
}

export default DatePicker;
