import React from 'react';
import { StyledStartButton } from './styled';

const StartButton = ({ callback }) => (
    <StyledStartButton onClick={callback}>Start Game</StyledStartButton>
);

export default StartButton;