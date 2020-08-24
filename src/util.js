const RANGE = [...Array(81)];

/**
 * Check the Sudoku range
 * @param {*} a the index of the current number - [int]
 * @param {*} b the index of the possible range - [int]
 * @returns the check result of the Sudoku range - [bool]
 */
export function checkSudokuRange(a, b) {
    const isSameRow = Math.floor(a / 9) === Math.floor(b / 9);
    const isSameCol = (a-b) % 9 === 0;
    const isSameVerticalBlock = Math.floor(a % 9 / 3) === Math.floor(b % 9 / 3);
    const isSameHorizontalBlock = Math.floor(a / 27) === Math.floor(b / 27);
    const isSameBlock = isSameVerticalBlock && isSameHorizontalBlock;

    return isSameRow || isSameCol || isSameBlock;
}

/**
 * Get the Sudoku exclude range
 * @param {*} data the Sudoku data - [array]
 * @param {*} index the index of the current number - [int]
 * @returns the exclude range data - [array]
 */
export function getExcludeRange(data, index) {
    return RANGE.reduce((array, value, key) => {
        const isNotEmpty = data[key] !== '0';
        const isSameRange = checkSudokuRange(index, key);
        
        if (isNotEmpty && isSameRange) {
            return array.concat(data[key]);
        }
        return array;
    }, []);
}

/**
 * Format the Sudoku data
 * @param {*} result the solved Sudoku data - [array]
 * @param {*} grid the title of the grid - [string]
 * @returns the formatted Sudoku data - [string]
 */
export function formatSudoku(result, grid) {
    const data = result.join('').match(/\d{1,9}/gm).join('\n');
    const sum = Number(result[0]) + Number(result[1]) + Number(result[2]);

    return grid.concat(` (sum: ${sum})\n`).concat(`${data}\n`);
}
