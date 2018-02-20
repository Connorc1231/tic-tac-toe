const prompt = require('prompt');

class Game {
    constructor() {
        this.player = 'X';
        this.board = {
            1: ' ',
            2: ' ',
            3: ' ',
            4: ' ',
            5: ' ',
            6: ' ',
            7: ' ',
            8: ' ',
            9: ' '
        };
        this.winCombinations = [
            [1, 2, 3], 
            [4, 5, 6], 
            [7, 8, 9], 
            [1, 4, 7],
            [2, 5, 8], 
            [3, 6, 9], 
            [1, 5, 9], 
            [3, 5, 7]];
        this.__init__();
    }

    __init__() {
        console.clear();
        console.log('Game started: \n' +
            ' 1 | 2 | 3 \n' +
            ' --------- \n' +
            ' 4 | 5 | 6 \n' +
            ' --------- \n' +
            ' 7 | 8 | 9 \n'
        );
        this.playTurn();
    }

    markBoard() {
        this.board[this.position] = this.player.toUpperCase();
    }

    printBoard() {
        console.log('\n' +
            ' ' + this.board[1] + ' | ' + this.board[2] + ' | ' + this.board[3] + '\n' +
            ' ---------\n' +
            ' ' + this.board[4] + ' | ' + this.board[5] + ' | ' + this.board[6] + '\n' +
            ' ---------\n' +
            ' ' + this.board[7] + ' | ' + this.board[8] + ' | ' + this.board[9] + '\n');

    }

    isInt() {
        let x;
        if (isNaN(this.position)) {
            return false;
        }
        x = parseFloat(this.position);
        return (x | 0) === x;
    }

    validateMove() {
        return this.isInt() === true && this.board[this.position] === ' ' ? true : false;
    }

    checkWin() {
        for (let i = 0; i < this.winCombinations.length; i++) {
            let markCount = 0;
            for (let j = 0; j < this.winCombinations[i].length; j++) {
                if (this.board[this.winCombinations[i][j]] === this.player) {
                    markCount++;
                }
                if (markCount === 3) {
                    return true;
                }
            }
        }
        return false;
    }

    playTurn() {
        let self = this;
        console.log('Your turn player: ' + self.player);
        prompt.start();
        prompt.get(['position'], function (err, result) {
            self.position = result.position;
            if (self.validateMove() === true) {
                self.markBoard();
                self.printBoard();
                if (self.checkWin() === true) {
                    console.log('Winner Winner!');
                    return;
                }
                if (self.player === 'X') {
                    self.player = 'O';
                    self.playTurn();
                } else {
                    self.player = 'X';
                    self.playTurn('X');
                }
            } else {
                console.log('incorrect input please try again...');
                self.playTurn(self.player);
            }
        });
    }

}

const game = new Game();


// let board = {
//     1: ' ',
//     2: ' ',
//     3: ' ',
//     4: ' ',
//     5: ' ',
//     6: ' ',
//     7: ' ',
//     8: ' ',
//     9: ' '
// };

// function markBoard(position, mark) {
//     board[position] = mark.toUpperCase();
// }

// function printBoard() {
//     console.log('\n' +
//         ' ' + board[1] + ' | ' + board[2] + ' | ' + board[3] + '\n' +
//         ' ---------\n' +
//         ' ' + board[4] + ' | ' + board[5] + ' | ' + board[6] + '\n' +
//         ' ---------\n' +
//         ' ' + board[7] + ' | ' + board[8] + ' | ' + board[9] + '\n');

// }

// function isInt(value) {
//     var x;
//     if (isNaN(value)) {
//         return false;
//     }
//     x = parseFloat(value);
//     return (x | 0) === x;
// }

// function validateMove(position) {
//     if (isInt(position) === true && board[position] === ' ') {
//         return true;
//     }
//     return false;
// }

// // Everyone possible combination of three in a row
// var winCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
// [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

// // Determins if the passed in player has three in a row
// function checkWin(player) {
//     for (var i = 0; i < winCombinations.length; i++) {
//         var markCount = 0;
//         for (var j = 0; j < winCombinations[i].length; j++) {
//             if (board[winCombinations[i][j]] === player) {
//                 markCount++;
//             }
//             if (markCount === 3) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// function playTurn(player) {

//     console.log('Your turn player: ' + player);
//     prompt.start();
//     prompt.get(['position'], function (err, result) {

//         if (validateMove(result.position) === true) {
//             markBoard(result.position, player);
//             printBoard();
//             if (checkWin(player) === true) {
//                 console.log('Winner Winner!');
//                 return;
//             }
//             if (player === 'X') {
//                 playTurn('O');
//             } else {
//                 playTurn('X');
//             }
//         } else {
//             console.log('incorrect input please try again...');
//             playTurn(player);
//         }
//     });
// }

// console.log('Game started: \n' +
//     ' 1 | 2 | 3 \n' +
//     ' --------- \n' +
//     ' 4 | 5 | 6 \n' +
//     ' --------- \n' +
//     ' 7 | 8 | 9 \n');


// playTurn('X');



















// // const prompt = require("prompt");
// // const colors = require("colors/safe");

// // class Game {
// //     constructor() {
// //         this.init();
// //         this.input = null;
// //     }

// //     init() {
// //         console.clear();
// //         console.log(colors.cyan('Welcome to Tic-Tac-Toe!\n'));
// //     }

// //     displayBoard() {
// //         console.log('              |           |          ');
// //         console.log('  3           |           |          ');
// //         console.log('    __________|___________|__________');
// //         console.log('              |           |          ');
// //         console.log('  2           |           |          ');
// //         console.log('    __________|___________|__________');
// //         console.log('              |           |          ');
// //         console.log('  1           |           |          ');
// //         console.log('              |           |          ');
// //         console.log('        A           B           C    ');
// //     }

// //     getInput() {
// //         let self = this;
// //         prompt.start();
// //         prompt.get({
// //             properties: {
// //                 move: {
// //                     description: colors.white("Enter your move (e.g. A2)")
// //                 }
// //             }
// //         }, (err, result) => {
// //             self.input = result.move
// //             this.render();
// //         });
// //     }

// //     render() {
// //         console.log(this.input)
// //     }
// // }

// // const game = new Game();

// // const __run__ = () => {
// //     game.getInput();
// // }

// // __run__();