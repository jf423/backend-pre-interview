import { solveSudoku } from '../src/sudoku.js';
import { checkSudokuRange, getExcludeRange } from '../src/util.js';

const testData = [
    "0","0","3","0","2","0","6","0","0",
    "9","0","0","3","0","5","0","0","1",
    "0","0","1","8","0","6","4","0","0",
    "0","0","8","1","0","2","9","0","0",
    "7","0","0","0","0","0","0","0","8",
    "0","0","6","7","0","8","2","0","0",
    "0","0","2","6","0","9","5","0","0",
    "8","0","0","2","0","3","0","0","9",
    "0","0","5","0","1","0","3","0","0"
];

const expectedData = [
    "4","8","3","9","2","1","6","5","7",
    "9","6","7","3","4","5","8","2","1",
    "2","5","1","8","7","6","4","9","3",
    "5","4","8","1","3","2","9","7","6",
    "7","2","9","5","6","4","1","3","8",
    "1","3","6","7","9","8","2","4","5",
    "3","7","2","6","8","9","5","1","4",
    "8","1","4","2","5","3","7","6","9",
    "6","9","5","4","1","7","3","8","2"
];

describe('Su Doku Test', () => {
    test('test the functionality of checking sudoku range', () => {
        expect(checkSudokuRange(3, 4)).toBeTruthy();
        expect(checkSudokuRange(3, 57)).toBeTruthy();
        expect(checkSudokuRange(3, 22)).toBeTruthy();

        expect(checkSudokuRange(2, 12)).toBeFalsy();
        expect(checkSudokuRange(12, 24)).toBeFalsy();
        expect(checkSudokuRange(12, 54)).toBeFalsy();
    });

    test('test the functionality of getting sudoku exclude range', () => {
        const expected = ['3', '2', '6', '9', '1', '7', '8'];
        const result = getExcludeRange(testData, 0);
        
        expect(result).toEqual(expected);
    });

    test('test the sudoku solve', () => {
        const result = solveSudoku(testData);

        expect(result).toEqual(expectedData);
    });
});
