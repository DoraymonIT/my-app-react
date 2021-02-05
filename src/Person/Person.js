import React from "react";
import "./Person.css";
import logo from "./logo192.png";
import styled from "styled-components";

const Person = (props) => {
  const Button = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;
  return (
    <div>
      {/* <input type="text" onChange={props.changed} value={props.name} /> */}
      <p>
        I am a {props.name} and I am {props.age}
        <Button onClick={props.click}>Delete Me</Button>
      </p>
      <hr />
      <img src={logo} alt="Logo" />
      {/* <button onClick={props.click}>my button</button> */}
    </div>
  );
};
export default Person;
