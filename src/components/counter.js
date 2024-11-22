import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [errMsg, setErrMsg] = useState(false);
  const addCount = () => {
    setCount(count + 1);
    setErrMsg(false);
  };
  const removeCount = () => {
    if (count <= 0) {
      setErrMsg(true);
    } else {
      setCount(count - 1);
    }
  };
  const resetCount = () => {
    setCount(0);
  };
  return (
    <div className="container py-5 text-center">
      <div className="d-flex align-items-center justify-content-center">
        <button className="btn btn-primary mx-1" onClick={addCount}>
          Add
        </button>
        <p className="mb-0 mx-1">{count}</p>
        <button className="btn btn-primary mx-1" onClick={removeCount}>
          Remove
        </button>
        <button className="btn btn-primary mx-1" onClick={resetCount}>
          Reset
        </button>
      </div>
      {errMsg ? <p className="mb-0 mt-2 text-danger">error msg</p> : null}
    </div>
  );
}

export default Counter;
