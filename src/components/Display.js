import React from "react";
import { StyledDisplay } from "./styles/StyledDisplay";

// Display gameover text
const Display = ({ gameOver, text }) => (
  <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;