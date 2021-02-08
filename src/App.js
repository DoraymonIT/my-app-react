import { Component } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import NavBar from "./containers/Navbar/Navbar";
import Form from "./containers/Form/Form";
import Person from "./containers/Persons/Person/Person";
class App extends Component {
  state = {
    persons: [],
    showPersons: true,
    nom: "",
    age: 0,
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
  inputChangedHandler1 = (event) => {
    this.setState({
      nom: event.target.value,
    });
    const nom = event.target.value;
    console.log(nom);
  };
  inputChangedHandler2 = (event) => {
    this.setState({
      age: event.target.value,
    });
    const age = event.target.value;
    console.log(age);
  };
  addPersonHandler = () => {
    const persons = [...this.state.persons];
    const person = {
      id: persons.length + 1,
      name: this.state.nom,
      age: this.state.age,
    };
    persons.push(person);
    console.log();
    this.setState({ persons: persons });
  };
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <h1 className="my-h1">
          <img src={logo} alt="logo" width="100px" /> <br></br> React To-Do
          List!
        </h1>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>Formulaire</h2>
              <Form
                add={this.addPersonHandler}
                change1={this.inputChangedHandler1}
                change2={this.inputChangedHandler2}
                value1={this.state.nom}
                value2={this.state.age}
              />
            </div>
            <div className="col-md-6">
              <h2>Liste ou table</h2>
              {this.state.persons.map((p) => {
                return (
                  <Person
                    identifier={p.id}
                    name={p.name}
                    age={p.age}
                    key={p.id}
                    click={this.deletePersonHandler}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="container-fluid">
<div className="row">
  <div className="col-md-6"></div>
  <div className="col-md-6"></div>
</div>
</div> */
}
