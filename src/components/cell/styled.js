import styled from 'styled-components';

export const StyledCell = styled.div`
    width: auto;
    background-color: ${({color, type}) => type === 0 ? 'transparent' : color};
    border: ${({type}) => type === 0 ? '' : '4px solid'};
    border-bottom-color: ${({color, type}) => type === 0 ? '' : color};
    border-right-color: ${({color, type}) => type === 0 ? '' : color};
    border-left-color: ${({color, type}) => type === 0 ? '' : color};
    border-top-color: ${({color, type}) => type === 0 ? '' : color};
`;