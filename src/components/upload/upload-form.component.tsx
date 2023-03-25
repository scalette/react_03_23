import React, { Component } from 'react';

class UploadForm extends Component {
  //Constructor for initialization of the states of the components
  constructor(props) {
    super(props);
    //binding the function so that accessible with this.function name
    this.manageSubmit = this.manageSubmit.bind(this);
    //Creating the react input dom with the createRef function
    this.inputValue = React.createRef();
  }
  manageSubmit(e) {
    e.preventDefault();
  }
  render() {
    const uncontrolledForm = {
      backgroundColor: 'red',
    };
    return <input className="uncontrolled=input" type="file" ref={this.inputValue} />;
  }
}

export default UploadForm;
