import { Component } from "react";
import Person from "./Person/Person";
import React from "react";
class Persons extends Component {
  state = {
    persons: [
      { id: 1, name: "Hamid", age: 20 },
      { id: 2, name: "Hafssa", age: 25 },
      { id: 3, name: "Ayoub", age: 21 },
    ],
  };
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };
  addPersonHandler = (person) => {
    const persons = [...this.state.persons];
    persons.push(person);
    this.setState({ persons: persons });
  };
  render() {
    return this.state.persons.map((p) => {
      return (
        <Person
          name={p.name}
          age={p.age}
          key={p.id}
          click={this.deletePersonHandler}
        />
      );
    });
  }
}

export default Persons;
