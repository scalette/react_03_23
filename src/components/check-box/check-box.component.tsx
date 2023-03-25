import React from 'react';
import ChackBoxEntity from './check-box-entity/check-box-entity.component';

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.inputValue1 = React.createRef();
    this.inputValue2 = React.createRef();
    this.inputValue3 = React.createRef();
  }
  render() {
    return (
      <div>
        <ChackBoxEntity ref={this.inputValue1}/>
        <ChackBoxEntity ref={this.inputValue2}/>
        <ChackBoxEntity ref={this.inputValue3}/>
      </div>
    );
  }
}

export default CheckBox;
