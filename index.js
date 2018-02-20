const prompt = require('prompt');
const colors = require('colors')

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
        console.log(colors.cyan('Game Start! \n'));
        console.log(
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
        prompt.message = 'Now Playing => ' + self.player;
        prompt.delimiter = '\n';
        prompt.start();
        prompt.get(['Move'], function (err, result) {
            self.position = result.Move;
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
