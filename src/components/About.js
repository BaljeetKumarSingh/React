import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent Component Did Mount");
  }
  componentDidUpdate() {
    console.log("Parent Component Did Update");
  }
  componentWillUnmount() {
    console.log("Parent Component Will Unmount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us Page</h1>
        <UserClass name={"First"} location={"Raman Hostel Kanpur, 208002"} />
        <UserClass name={"Second"} location={"Lucknow,UP"} />
        <UserClass name={"Third"} location={"Lucknow,UP"} />
      </div>
    );
  }
}

export default About;
