import React from "react";
class ClassBasedComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Rahul",
      age: 24,
      date: new Date(),
    };
  }

  componentDidMount() {
    console.log(this.props.name);
    this.timeId = setInterval(() => {
      console.log("setInterval");
    }, 1000);

    setTimeout(() => {
      clearInterval(this.timeId);
    }, 10000);
  }
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  render() {
    return (
      <>
        <h2>ClassBasedComponent</h2>
        <h2>{this.state.name + " " + this.state.age}</h2>
        <h2> {this.state.date.toLocaleTimeString()}</h2>
      </>
    );
  }
}

export default ClassBasedComponent;
