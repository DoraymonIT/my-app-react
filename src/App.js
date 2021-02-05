import { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Hamid", age: 20 },
      { id: 2, name: "Hafssa", age: 25 },
      { id: 3, name: "Ayoub", age: 21 },
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
  togglePersonsDataHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  render() {
    return (
      <div className="App">
        <h1 className="my-h1">Hello React !</h1>
        {this.state.persons.map((p, index) => {
          return (
            <Person
              name={p.name}
              age={p.age}
              click={() => {
                this.deletePersonHandler(index);
              }}
              key={p.id}
            />
          );
        })}
        {/* <button onClick={this.togglePersonsDataHandler}>Clique Me !</button> */}
        {/* {this.state.showPersons === true ? (
          <div>F
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameHandler}
              changed={this.changeNameHandler}
            />
          </div>
        ) : null} */}
      </div>
    );
  }
}

export default App;
