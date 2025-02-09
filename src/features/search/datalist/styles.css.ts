import { css } from "@emotion/react";

export const buttonStyle = (isFocused: boolean) => css(`
  width: 100%;
  padding: 8px;
  border: none;
  background: ${isFocused ? "#007bff" : "white"};
  color: ${isFocused ? "white" : "black"};
  text-align: left;
  cursor: pointer;
  &:hover {
    background: #0056b3;
    color: white;
  }
  &:focus {
    background: #007bff;
    color: white;
    outline: none;
  }

`);
