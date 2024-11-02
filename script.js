const BOARD_SIZE = 8;

function isValid(x, y) {
  return x >= 0 && x < BOARD_SIZE && y >= 0 && y < BOARD_SIZE;
}

const allowedKnightMoves = [
  [2, 1],
  [1, 2],
  [2, -1],
  [-2, 1],
  [-2, -1],
  [-1, -2],
  [-1, 2],
  [1, -2],
];

function knightMoves(start, end) {
    const [startX, startY] = start;
    const [endX, endY] = end;

    if (startX === endX && startY === endY) {
        return {moves: 0, path:[start]};
    }


    const queue = [{ path: [start], moves:0 }];

    const visited = new Set();
    visited.add(`${startX},${startY}`);

    while (queue.length > 0) {
        const { path, moves } = queue.shift();

        const [currentX, currentY] = path[path.length - 1];

        for (let [dx, dy] of allowedKnightMoves) {
            const newX = currentX + dx;
            const newY = currentY + dy;

            if (isValid(newX, newY) && !visited.has(`${newX},${newY}`)) {
                const newPath = [...path, [newX, newY]];

                if (newX === endX && newY === endY) {
                    return { moves: moves + 1, path: newPath };
                }

                queue.push({ path: newPath, moves: moves + 1});
                visited.add(`${newX},${newY}`);
            }
        }
    }
    
    return {moves: -1, path: []};
}


const result = knightMoves([0, 0], [7, 7]);

console.log(`You made it in ${result.moves} moves! Here is your path: `);
console.log(result.path);