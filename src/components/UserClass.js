import React from "react";

class Users extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/shikhar-shukla-blackchai"
    );
    const json = await data.json();
    console.log("json", json);
    this.setState({ userInfo: json });
  }
  render() {
    const { location, name, avatar_url } = this.state.userInfo;
    return (
      <div className="border border-black p-2 m-4">
        <img src={avatar_url} className="h-10 w-10" />
        <h1>Name: {name}</h1>
        <h2>Loaction: {location}</h2>
        <h3>Contact: shikharshukla678@gmail.com</h3>
      </div>
    );
  }
}

export default Users;
