import React from "react";
import "./FormContent.css";
import { Input } from "antd";
import { useState } from "react";

const FormContent = (props) => {
  const [firstValue, setFirstValue] = useState("");

  const firstValueChangeHandler = (e) => {
    setFirstValue(e.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    props.onSubmit(firstValue);
};
  return (
    <div className="parent-box">
      <form onSubmit={addUserHandler} >
        <label htmlFor={props.firstField}>{props.firstField}</label>
        <Input
          placeholder={props.firstField}
          type="text"
          onChange={firstValueChangeHandler}
          value={firstValue}
          required
        />
        <br />
        {props.urlInput ? (
          <React.Fragment>
            <label htmlFor={props.secondField}>
              {props.secondField} (optional)
            </label>
            <Input addonBefore="www.eden.com/" defaultValue="" />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <label htmlFor={props.secondField}>{props.secondField}</label>
            <Input placeholder={props.secondField} type="text" />
          </React.Fragment>
        )}
        <br />
        <br />

        <input
          type="submit"
          value="Create WorkSpace"
        />

        <br />
      </form>
    </div>
  );
};

export default FormContent;
