type Player = 'X' | 'O';

export default class TicTacToe {
    // Check if game is over
    static gameover(board: string[][]): boolean {
        // Check if there is a winner
        if (TicTacToe.winner(board)) {
            return true;
        }


        // Check if all cells have been filled
        for (let i = 0; i < board.length; i++) {
            for (let j = 0; j < board[i].length; j++) {
                if (board[i][j] == '') {
                    return false;
                }
            }
        }

        // It is a tie since there is no winner
        // and all cells have been filled
        return true;
    }


    // Check for winner
    static winner(board: string[][]): Player | null {

        // Check if a row has three consecutive marks
        for (let i = 0; i < board.length; i++) {
            if (board[i][0] != '' && board[i][0] == board[i][1] && board[i][1] == board[i][2]) {
                return board[0][i] == 'X' ? 'X' : 'O';
            }
        }

        // Check if a column has three consecutive marks
        for (let i = 0; i < board.length; i++) {

            if (board[0][i] != '' && board[0][i] == board[1][i] && board[1][i] == board[2][i]) {
                return board[0][i] == 'X' ? 'X' : 'O';
            }
        }

        // Check if a diagonal has three consecutive marks
        if (board[1][1] != '' && board[0][0] == board[1][1] && board[1][1] == board[2][2]) {
            return board[1][1] == 'X' ? 'X' : 'O';
        }
        if (board[1][1] != '' && board[2][0] == board[1][1] && board[1][1] == board[0][2]) {
            return board[1][1] == 'X' ? 'X' : 'O';
        }

        return null;

    }

}