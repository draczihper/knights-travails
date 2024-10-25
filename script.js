const BOARD_SIZE = 8;

function isValid(x, y) {
    return x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE;
}

const knightMoves = [
    [2, 1], [1, 2], [2, -1], [-2, 1], [-2, -1], [-1, -2], [-1, 2], [1, -2]
];


class chessBoardGraph {
    constructor() {
        this.board = new Map();
        this.buildGraph();
    }

    buildGraph() {
        for(let i = 0; i < BOARD_SIZE; i++) {
            
        }
    }
}
