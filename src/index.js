import fs from 'fs';

import { solveSudoku } from './sudoku.js';
import { formatSudoku } from './util.js';

if (process.env.NODE_ENV !== 'test') {
    fs.readFile('sudoku.txt', function (err, data) {
        if (err) {
            throw err; 
        }
        const sudokuData = data.toString();
        const gridList = sudokuData.match(/^Grid\s\d\d/gm);
        const sudokuList = sudokuData.split(/^Grid\s\d\d/gm).map(v => v.replace(/\n/g, '')).filter(v => v !== '');    
    
        console.log('Start solve the Sudoku!');
        const answer = sudokuList.map((value, index) => {
            console.time(`Solve Sudoku ${gridList[index]}`);
            const result = solveSudoku(value.split(''));
            console.timeEnd(`Solve Sudoku ${gridList[index]}`);
    
            return formatSudoku(result, gridList[index]);
        });
    
        console.log('Writing the Sudoku answer file...');
        fs.writeFile('answer.txt', answer.join(''), function (err) {
            if (err)
                console.log(err);
            else
                console.log('Finished!');
        });
    });    
};
