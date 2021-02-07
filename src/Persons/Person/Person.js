import React from "react";
import "./Person.css";
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
    
          I am a {props.name} and I am {props.age}
          <Button onClick={props.click}>Delete Me</Button>
       
    </div>
  );
};
export default Person ;
