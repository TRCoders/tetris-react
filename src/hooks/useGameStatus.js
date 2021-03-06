import { useState, useEffect, useCallback } from 'react';

export const useGameStatus = (rowsCleared) => {
  // Scores, rows and level for the tetris stage
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);

  // Points for each line
  const linePoints = [40, 100, 300, 1200];

  const calcScore = useCallback(() => {
    // Player Score functions.
    if (rowsCleared > 0) {
      // This is how original Tetris score is calculated
      setScore((prev) => prev + linePoints[rowsCleared - 1] * (level + 1));
      setRows((prev) => prev + rowsCleared);
    }
  }, [level, linePoints, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [calcScore, rowsCleared, score]);

  return [score, setScore, rows, setRows, level, setLevel];
};
