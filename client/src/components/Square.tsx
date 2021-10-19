import { FC } from 'react';

interface IProps {
    value: string;
    onClick: any;
    row: number;
    col: number;
}

const style: React.CSSProperties = {
    background: "#B2FFFF",
    border: "2px solid darkblue",
    fontSize: "30px",
    fontWeight: 800,
    cursor: "pointer",
    outline: "none",
};

const Square: FC<IProps> = (props) => {
    return <button style={style} onClick={() => props.onClick(props.row, props.col)}>{props.value}</button>
}

export default Square;
