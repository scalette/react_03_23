import { Component, ReactNode } from "react";

class ErrorPage extends Component {
  render(): ReactNode {
    return (
      <div id="error-page">
        <h1>Oops!</h1>
        <p>ERROR CODE: 404</p>
        <p>PAGE DOES NOT EXIST</p>
      </div>
    );
  }
}

export default ErrorPage;
