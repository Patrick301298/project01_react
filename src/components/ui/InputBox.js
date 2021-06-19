import React from "react";
import enhance from "../hoc/wrapInputBox";

function InputBox(props) {
  const { value, handleChange, handleKeyUp } = props;
  console.log("props", props);
  return (
    <div>
      <h1>InPutBox</h1>
      <input
        autoFocus
        type="text"
        className="form-control add-todo"
        value={value}
        onKeyUp={handleKeyUp}
        onChange={handleChange}
        placeholder="Add New"
      />
    </div>
  );
}

export default enhance(InputBox);
