import Users from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>About US</h1>
        <h1>This is Namaste React WEB serease</h1>
        <Users />
      </div>
    );
  }
}

export default About;
