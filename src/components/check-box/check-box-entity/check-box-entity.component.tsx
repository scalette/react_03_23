import React from 'react';

class ChackBoxEntity extends React.Component {
  constructor(props) {
    super(props);
    this.inputValue = React.createRef();
  }
  render() {
    return (
      <div>
        <label>
          <input type="checkbox" ref={this.inputValue}/>
          {this.props.fieldName}
        </label>
      </div>
    );
  }
}

export default ChackBoxEntity;
