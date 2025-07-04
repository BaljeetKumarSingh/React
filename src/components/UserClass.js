import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 2,
    };
    console.log(this.props.name + "Child Constructor");
  }

  componentDidMount() {
    console.log(this.props.name + "Child Component Did Mount");
  }
  componentDidUpdate() {
    console.log(this.props.name + "Child Component Did Update");
  }
  componentWillUnmount() {
    console.log(this.props.name + "Child Component Will Unmount");
  }

  render() {
    console.log(this.props.name + "Child Render");
    const { name, location } = this.props;
    const { count } = this.state;
    return (
      <div className="user-card">
        <h1>Count = {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          count Increment
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: 7761884946</h4>
      </div>
    );
  }
}

export default UserClass;
