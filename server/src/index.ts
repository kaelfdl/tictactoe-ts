import express from "express";
import cors from "cors";
import TicTacToe from "./TicTacToe";

const app = express();

// Enable Cross origin resource sharing
app.use(cors());

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Evaluate board
app.post('/evaluate', (req, res) => {

    const message = {
        "gameover": TicTacToe.gameover(req.body.board),
        "winner": TicTacToe.winner(req.body.board)
    };

    res.json(
        message
    );
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`App listening on port ${port}`));

