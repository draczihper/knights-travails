const BOARD_SIZE = 8;

function isValid(x, y) {
    return x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE;
}

const allowedKnightMoves = [
    [2, 1], [1, 2], [2, -1], [-2, 1], [-2, -1], [-1, -2], [-1, 2], [1, -2]
];

function knightMoves(start, end) {
    const [startX, startY] = start;
    const [endX, endY] = end;

    if (startX === endX && startY === endY) {
        return [start];
    }
}

const queue = [[start]];

const visited = new Set();
visited.add(`${startX},${startY}`);

while (queue.length > 0) {
    const path = queue.shift();

    const [currentX, currentY] = path[path.length - 1];

    for (let [dx, dy] of allowedKnightMoves) {
        const newX = currentX + dx;
        const newY = currentY + dy;


        if (isValid(newX, newY) && !visited.has(`${newX},${newY}`)) {
            const newPath = [...path, [newX, newY]];

            if (newX === endX && newY === endY) {
                return newPath;
            }
        }
    }
}

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
