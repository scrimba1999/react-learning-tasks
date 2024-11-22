import React, { useState } from "react";

export default function FormComp() {
  const handleUpperCase = (e) => {
    e.preventDefault();
    setText(text.toUpperCase());
  };
  const handleLowerCase = (e) => {
    e.preventDefault();
    setText(text.toLowerCase());
  };
  const handleClear = () => {
    setText("");
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState("");

  return (
    <div className="container py-5">
      <form className="form mb-5">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Convert your text here
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="10"
            placeholder="Enter text here..."
            value={text}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="row pt-3">
          <div className="col-auto">
            <button className="btn btn-primary" onClick={handleUpperCase}>
              To Uppercase
            </button>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" onClick={handleLowerCase}>
              To Lowercase
            </button>
          </div>
          <div className="col-auto">
            <button className="btn btn-primary" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>
      </form>
      <h4>Text summary</h4>
      <p>
        {text?.split(" ")?.filter(Boolean).length} words and {text.length}{" "}
        characters
      </p>
    </div>
  );
}
