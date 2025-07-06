import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "dummy",
        location: "Default",
      },
    };
    console.log("Child Constructor");
  }

  async componentDidMount() {
    // const data = await fetch("https://api.github.com/users/BaljeetKumarSingh");
    // const json = await data.json();
    // // console.log(json);
    // this.setState({
    //   userInfo: json,
    // });
    this.timer = setInterval(() => {
      console.log("Namaste React Op");
    }, 1000);
    console.log("Child Component Did Mount");
  }

  componentDidUpdate() {
    console.log("Child Component Did Update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Child Component Will Unmount");
  }

  render() {
    console.log("Child Render");

    const { name, location, avatar_url } = this.state.userInfo;
    // debugger;
    // add some css
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 7761884946</h4>
      </div>
    );
  }
}

export default UserClass;
