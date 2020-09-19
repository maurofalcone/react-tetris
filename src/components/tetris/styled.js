import styled from 'styled-components';
import background from '../../img/background.png';

export const StyledTetrisWrapper = styled.div`
    background: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
`;

export const StyledTetris = styled.div`
    display: flex;
    align-items: center;
    padding: 40px;
    margin: auto 0;
    max-width: 900px;
    aside {
        width: 100%;
        max-width: 200px;
        display: block;
        padding: 0 20px;
    }
`;