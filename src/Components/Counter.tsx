import * as React from "react";
import { useState, FC } from "react";

interface Props {
  initialState: number;
  title: String;
}

const Counter: FC<Props> = ({ initialState, title }) => {
  const [count, setCount] = useState(initialState);

  return (
    <>
      <h1>{title}</h1>
      <p>The count is: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </>
  );
};

export default Counter;
