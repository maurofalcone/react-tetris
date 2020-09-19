import React from 'react';
import State from '../stage';
import Display from '../display';
import StartButton from '../start-button';
import Stage from '../stage';
const Tetris = () => {
    return (
        <div>
            <Stage />
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