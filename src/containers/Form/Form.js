import React from "react";
import styled from "styled-components";
const Form = (props) => {
  const Button = styled.button`
    background: transparent;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 1em 0em 0em 0;
    padding: 0.25em 1em;
  `;
  return (
    <div>
      <div className="form-group">
        <label>Nom : </label>
        <br />
        <input value={props.value1} onChange={props.change1} type="text" />
        <br />
        <label>Age : </label>
        <br />
        <input value={props.value2}  onChange={props.change2} type="number" />
        <br />
        <Button onClick={props.add}>Go !</Button>
      </div>
    </div>
  );
};
export default Form;
