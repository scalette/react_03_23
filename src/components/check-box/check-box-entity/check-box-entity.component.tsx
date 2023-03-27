import React, { RefObject } from 'react';

interface ChackBoxEntityProps {
  fieldName: string;
}
class ChackBoxEntity extends React.Component {
  inputValue: RefObject<HTMLInputElement>;
  props: ChackBoxEntityProps;
  constructor(props: ChackBoxEntityProps) {
    super(props);
    this.props = props;
    this.inputValue = React.createRef<HTMLInputElement>();
  }
  render() {
    return (
      <div>
        <label>
          <input type="checkbox" ref={this.inputValue} />
          {this.props.fieldName}
        </label>
      </div>
    );
  }
}

export default ChackBoxEntity;
