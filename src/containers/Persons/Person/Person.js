import React from "react";
import "./Person.css";
import styled from "styled-components";

const Person = (props) => {
  const Button = styled.button`
    background: transparent;
    border: 2px solid red;
    color: red;
    margin: 0 1em;
    padding: 0.25em 1em;
  `;
  return (
    <div className="row">
      <div className="col-md-6 espace1">
        {props.identifier} : I'm <b>{props.name}</b>, <b>{props.age}</b> y.o
      </div>
      <div className="col-md-6 espace">
        <Button onClick={props.click}>Delete Me</Button>
      </div>
    </div>
  );
};
export default Person;
