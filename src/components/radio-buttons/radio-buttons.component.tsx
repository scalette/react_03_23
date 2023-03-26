import React from 'react';
class RadioButtons extends React.Component {
  constructor(props) {
    super(props);
    this.male = React.createRef();
    this.female = React.createRef();
  }
  render() {
    return (
      <div>
        <input type="radio" value="Male" name="gender" defaultChecked ref={this.male}/> Male
        <input type="radio" value="Female" name="gender" ref={this.female}/> Female
      </div>
    );
  }
}

export default RadioButtons;
