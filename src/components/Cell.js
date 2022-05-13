import React from 'react';
import { StyledCell } from './styles/StyledCell';
import { TETROMINOS } from '../tetrominos';

// Individual Cells to make the background for the stage
const Cell = ({ type }) => (
  <StyledCell type={type} color={TETFROMINOS[type].color}>
    {console.log('rerender')}
  </StyledCell>
);

export default React.memo(Cell);
