import { useState } from 'react';
import Board from "./Board";

const style: React.CSSProperties = {
    background: "#B2FFFF",
    border: "2px solid darkblue",
    fontSize: "25px",
    cursor: "pointer",
    padding: "5px 20px"
};

const Game = () => {
    const [board, setBoard] = useState(Array.from({ length: 3 }, () => (
        Array.from({ length: 3 }, () => '')
    )));
    const [xIsNext, setXisNext] = useState(true);
    const [gameover, setGameover] = useState(false);
    const [winner, setWinner] = useState('');

    const [connectionLost, setConnectionLost] = useState(false);


    const handleClick = (i: number, j: number) => {
        const boardCopy = [...board];

        // If user clicks an occupied square or if game is won, return
        if (winner || boardCopy[i][j] || gameover || connectionLost) return;

        // Put an X or an O in the clicked square
        boardCopy[i][j] = xIsNext ? "X" : "O";
        setBoard(boardCopy);
        calculateWinner(boardCopy);
        setXisNext(!xIsNext);
    };

    const calculateWinner = (board: string[][]) => {
        fetch("http://localhost:8000/evaluate/",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(
                    { "board": board })
            })
            .then((res) => res.json())
            .then((res) => {
                setWinner(res["winner"]);
                setGameover(res["gameover"]);
            })
            .catch(() => setConnectionLost(true))
    }

    const restart = () => {
        setBoard(Array.from({ length: 3 }, () => (
            Array.from({ length: 3 }, () => '')
        )))
        setWinner('');
        setXisNext(true);
        setGameover(false);
    }


    return (
        <div>
            <h1>Tic Tac Toe</h1>
            <Board squares={board} onClick={handleClick} />
            <div>
                <p>
                    {winner ? "Winner: " + winner : gameover ? "It's a tie!" : "Current Player: " + (xIsNext ? "X" : "O")}
                </p>
                {
                    connectionLost ? <h3 style={{ color: 'red' }}>Connection Lost</h3> : null
                }
                {
                    (gameover) ? <button style={style} onClick={restart}>Restart</button> : null
                }
            </div>
        </div>
    );
}



export default Game;