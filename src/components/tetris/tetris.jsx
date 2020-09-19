import React from 'react';
import Display from '../display';
import StartButton from '../start-button';
import Stage from '../stage';
import { createStage } from '../../helpers/game/createStage';

const Tetris = () => {
    return (
        <div>
            <Stage stage={createStage()} />
            <aside>
                <div>
                    <Display text="Score"/>
                    <Display text="Rows"/>
                    <Display text="Level"/>
                </div>
                <StartButton/>
            </aside>
        </div>
    );
}

export default Tetris;