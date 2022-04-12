import { useState } from 'react';

import { randomTetromin } from '../tetrominos'

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        tetromino: randomTetromin().shape,
        collided: false,
    });

    return [player];
}