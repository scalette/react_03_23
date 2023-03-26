import React from 'react';
import ChackBoxEntity from './check-box-entity/check-box-entity.component';

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.read = React.createRef();
    this.write = React.createRef();
    this.execute = React.createRef();
  }
  render() {
    return (
      <div>
        <ChackBoxEntity fieldName={'read'} ref={this.read}/>
        <ChackBoxEntity fieldName={'write'} ref={this.write}/>
        <ChackBoxEntity fieldName={'execute'} ref={this.execute}/>
      </div>
    );
  }
}

export default CheckBox;
