import React, { Component } from 'react';

class SelectForm extends Component {
  constructor(props) {
    super(props);
    //binding the function so that accessible with this.function name
    this.manageSubmit = this.manageSubmit.bind(this);
    //Creating the react input dom with the createRef function
    this.inputValue = React.createRef();
  }

  manageSubmit(e) {
    e.preventDefault();
    const file = this.inputValue.current.files[0].name;
    //upload file on server
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
