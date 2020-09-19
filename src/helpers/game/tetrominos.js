export const TETROMINOS = {
    0: {
        shape: [[0]],
        color: 'transparent',
    },
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
        ],
        color: 'blue',
    },
    J: {
        shape: [
            [0, 'J', 0],
            [0, 'J', 0],
            ['J', 'J', 0],
        ],
        color: 'red',
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L'],
        ],
        color: 'lightBlue',
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O'],
        ],
        color: 'green',
    },
    S: {
        shape: [
            [0, 'S', 'S'],
            ['S', 'S', 0],
            [0, 0, 0],
        ],
        color: 'orange',
    },
    T: {
        shape: [
            [0, 0, 0],
            ['T', 'T', 'T'],
            [0, 'T', 0],
        ],
        color: 'mistyRose',
    },
    Z: {
        shape: [
            ['Z', 'Z', 0],
            [0, 'Z', 'Z'],
            [0, 0, 0],
        ],
        color: 'yellow',
    },
}

export const randomTetromino = () => {
    const tetromino = 'IJLOSTZ';
    const randTetromino = tetromino[Math.floor(Math.random() * tetromino.length)];
    return TETROMINOS[randTetromino];
}