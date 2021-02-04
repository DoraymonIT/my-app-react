import React from "react";
const Person = (props) => {
  return (
    <div>
      <input type="text" onChange={props.changed} value={props.name} />
      <p>
        I am a {props.name} and I am {props.age}
      </p>
      <button onClick={props.click}>my button</button>
    </div>
  );
};
export default Person;
