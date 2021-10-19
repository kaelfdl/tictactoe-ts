import { FC } from 'react';
import Square from "./Square";

interface IProps {
    squares: string[][];
    onClick: any;
}

const style: React.CSSProperties = {
    border: "4px solid darkblue",
    borderRadius: "10px",
    width: "250px",
    height: "250px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};


const Board: FC<IProps> = (props) => {
    return (
        <div style={style}>
            {props.squares.map((square, i) => {
                return square.map((val, j) => {
                    return <Square key={i + j} value={val} row={i} col={j} onClick={props.onClick} />
                })
            })}

        </div>

    )
}

export default Board;
