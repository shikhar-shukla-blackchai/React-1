import Users from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mt-10">
        <h1>About US</h1>
        <h2>This is Namaste React WEB serease</h2>
        <h3>
          Logged-In User:{" "}
          <UserContext.Consumer>
            {({ loggedInUser }) => loggedInUser || "Geust"}
          </UserContext.Consumer>
        </h3>
        <Users />
      </div>
    );
  }
}

export default About;
