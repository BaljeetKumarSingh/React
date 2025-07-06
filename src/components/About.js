import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>About Us Page</h1>
        <User
          name={"Baljeet Singh"}
          location={"Kanpur, Uttar Pradesh, India"}
        />
      </div>
    );
  }
}

export default About;
