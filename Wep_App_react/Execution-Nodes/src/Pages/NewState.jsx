import { Button, Box } from "@mui/material";
import { useState } from "react";

/**
 *@function Counter.jsx
 *@author Azim
 *
 **/

const Counter = () => {
  const initialState = [
    {
      id: 1,
      count: 0,
    },
    {
      id: 2,
      count: 0,
    },
  ];
  const [state, setState] = useState(initialState);
  const increment = (id) => {
    const updatedState = state.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          count: item.count + 1,
        };
      }
      return { ...item };
    });
    setState(updatedState);
  };
  const decrement = (id) => {
    const updatedState = state.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          count: item.count - 1,
        };
      }
      return { ...item };
    });
    setState(updatedState);
  };
  const totalCount = () =>
    state.reduce((prev, current) => prev + current.count, 0);
  return (
    <Box display={`flex`} justifyContent={`center`} alignItems={`center`}>
      <div>
        <h1>This. Counter Component</h1>
        {state.map((item) => (
          <div>
            <div>{item.count}</div>
            <Button onClick={() => increment(item.id)}>Increment</Button>
            <Button onClick={() => decrement(item.id)}>Increment</Button>
          </div>
        ))}
        <div>{totalCount()}</div>
      </div>
    </Box>
  );
};

export default Counter;
