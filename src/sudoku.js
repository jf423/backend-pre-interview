import { getExcludeRange } from './util.js';

const NUMBER = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

/**
 * Get the resolved result of Sudoku
 * @param {*} data the Sudoku data - [array]
 * @returns the recursive result of Sudoku - [array]
 */
export function solveSudoku(data) {
    const index = data.findIndex(v => v === '0');
    if (index === -1) {
        return data;
    }
    const excludes = getExcludeRange(data, index);
    const ranges = NUMBER.filter((num) => excludes.findIndex(v => v === num) === -1);

    return ranges.reduce((array, value) => {
        const nextData = data.map((v, i) => i === index ? value : v);

        return array.concat(solveSudoku(nextData));
    }, []);
}
