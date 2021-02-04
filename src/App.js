import { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      {
        name: "Hamid",
        age: 20,
      },
    ],
  };
  switchNameHandler = () => {
    this.setState({
      persons: [
        {
          name: "Hamada",
          age: 75,
        },
      ],
    });
  };
  switchNameHandler1 = () => {
    this.setState({
      persons: [
        {
          name: "hafsa",
          age: 175,
        },
      ],
    });
  };
  changeNameHandler = (event) => {
    console.log(event);
    this.setState({
      persons: [
        {
          name: event.target.value,
          age: 175,
        },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h1 className="my-h1">Hello React !</h1>
        <button onClick={this.switchNameHandler1}>Clique Me !</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}
          changed={this.changeNameHandler}
        />
      </div>
    );
  }
}

export default App;
