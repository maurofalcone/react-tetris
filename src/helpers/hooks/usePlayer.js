import { useCallback, useState } from 'react';
import { STAGE_WIDTH } from '../game/createStage';
import { randomTetromino, TETROMINOS } from '../game/tetrominos';


export const usePlayer = () => {
    const [player, setPlayer] = useState({
        collided: false,
        pos: {
            x: 0,
            y: 0,
        },
        tetromino: TETROMINOS[0].shape,
    });

    const updatePlayerPosition = ({x, y, collided}) => {
        setPlayer(prev => ({
            ...prev,
            pos: {x: (prev.pos.x += x), y: (prev.pos.y += y)},
            collided,
        }));
    }

    const resetPlayer = useCallback(() => {
        setPlayer({
            collided: false,
            pos: {
                x: STAGE_WIDTH / 2 - 2,
                y: 0,
            },
            tetromino: randomTetromino().shape,
        })
    }, []);

    return [player, updatePlayerPosition, resetPlayer];
};