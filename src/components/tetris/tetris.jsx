import React from 'react';
import Display from '../display';
import StartButton from '../start-button';
import Stage from '../stage';
import { createStage } from '../../helpers/game/createStage';
import { StyledTetris, StyledTetrisWrapper } from './styled';

const Tetris = () => {
    console.log(createStage());
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()} />
                <aside>
                    <div>
                        <Display text="Score"/>
                        <Display text="Rows"/>
                        <Display text="Level"/>
                    </div>
                    <StartButton/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
}

export default Tetris;