import React, { useState } from "react";

import { createStage } from '../gameHelpers';

// Styled Components
import { StyledTetrisWrapper, StyledTetris } from "./styles/StyledTetris";

// Custom Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

// Components
import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const [player] = usePlayer();
  const [stage, setStage] = useStage(player);

  console.log('re-render');

  const movePlayer = dir => {
    updatePlayerPos({ x: dir, y: 0});
  }

  const startGame = () => {
    // Reset the stage
    setStage(createStage());
    resetPlayer();
  }

  const drop = () => {
    updatePlayerPos({ x: 0, y: 1, collided: false })
  }

  const dropPlayer = () => {
    drop();
  }

  // This is the movement for left and right arrow keys
  // if keyCode equals to 37, move the player left with movePlayer function
  // same thing happens if it equals to 39 except it moves the player right
  // if move equals to 40 then the player drops down to the rest of the blocks.

  const move = ({ keyCode }) => {
    if(!gameOver) {
      if(keyCode === 37) {
        movePlayer(-1);
      } else if (keyCode === 39) {
        movePlayer(1)
      } else if (keyCode === 40) {
        dropPlayer();
      }

    }
  }

  return (
    <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <StyledTetris>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text="Game Over" />
          ) : (
          <div>
            <Display text="Score" />
            <Display text="Rows" />
            <Display text="Level" />
          </div>
          )}
          <StartButton onClick={startGame}/>
        </aside>
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris