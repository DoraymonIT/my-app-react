import "./App.css";
import Person from "./Person/Person";
function App() {
  return (
    <div className="App">
      <h1 className='my-h1'>Hello React !</h1>
      <Person name="Ayoub" age='20' />
      <Person name="Hamid" />
      <Person name="Hafssa" />
    </div>
  );
}

export default App;
