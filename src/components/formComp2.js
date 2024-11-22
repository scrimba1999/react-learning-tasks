import React, { useState } from "react";

export default function FormComp() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });

  const [text, setText] = useState("");
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
  const handleInput = (e) => {
    // setInputs({ ...inputs, [e.target.name]: e.target.value });

    setInputs((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const { name, email } = inputs;
  return (
    <div className="container py-5">
      <form className="form mb-5">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Convert your text here
          </label>
          <input type="text" name="name" value={name} onChange={handleInput} />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleInput}
          />
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
