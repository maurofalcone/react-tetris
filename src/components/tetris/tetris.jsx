import React, { useState } from 'react';
import Display from '../display';
import StartButton from '../start-button';
import Stage from '../stage';
import { StyledTetris, StyledTetrisWrapper } from './styled';
import { usePlayer } from '../../helpers/hooks/usePlayer';
import { useStage } from '../../helpers/hooks/useStage';
import { createStage } from '../../helpers/game/createStage';
import { LEFT_ARROW, RIGHT_ARROW, DOWN_ARROW } from '../../helpers/game/keyCodes';

const Tetris = () => {
    const [dropTime, setDropTime] = useState();
    const [gameOver, setGameOver] = useState(false);
    const [player, updatePlayerPosition, resetPlayer] = usePlayer();
    const [stage, setStage] = useStage(player);
    const movePlayer = (direction) => {
        updatePlayerPosition({ x: direction, y: 0 });
    }
    const startGame = () => {
        // reset everything
        setStage(createStage());
        resetPlayer();
    }
    const drop = (direction) => {
        updatePlayerPosition({ x: 0, y: 1 });
    }
    const dropPlayer = () => {
        drop();
    }

    const move = ({ keyCode }) => {
        if (!gameOver) {
            switch (keyCode) {
                case LEFT_ARROW:
                    movePlayer(-1);
                    break;
                case RIGHT_ARROW:
                    movePlayer(1);
                case DOWN_ARROW:
                    dropPlayer(1);
                default:
                    break;
            }
        }
    }
    return (
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={move}>
            <StyledTetris>
                <Stage stage={stage} />
                <aside>
                    {
                        gameOver
                            ?
                            <Display text="Game Over" gameOver={gameOver} />
                            :
                            <div>
                                <Display text="Score" />
                                <Display text="Rows" />
                                <Display text="Level" />
                            </div>
                    }
                    <StartButton callback={startGame} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
}

export default Tetris;