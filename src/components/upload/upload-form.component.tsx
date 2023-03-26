import React, { Component, RefObject } from 'react';
import { Componentprops } from '../radio-buttons/radio-buttons.component';

class UploadForm extends Component {
  inputValue: RefObject<HTMLInputElement>;
  constructor(props: Componentprops) {
    super(props);
    this.inputValue = React.createRef<HTMLInputElement>();
  }
  render() {
    return <input className="uncontrolled=input" type="file" ref={this.inputValue} />;
  }
}

export default UploadForm;
