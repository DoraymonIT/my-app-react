import { Component } from "react";
import "./App.css";
import Persons from "./Persons/Persons";
import logo from "./assets/logo.svg";
import NavBar from "./containers/Navbar";
class App extends Component {
  state = {
    showPersons: true,
  };
  togglePersonsDataHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    return (
      <div>
        <NavBar></NavBar>
        <h1 className="my-h1">
          {" "}
          <img src={logo} alt="logo" width="100px" /> <br></br> Hello React !
        </h1>
        <button
          onClick={() => this.togglePersonsDataHandler()}
          className="my-button"
        >
          Toggle Me
        </button>
        <br />
        {this.state.showPersons ? <Persons /> : null}
      </div>
    );
  }
}

export default App;
