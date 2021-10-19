<div id="top"></div>

<br />
<div align="center">

<h1 align="center">Tic Tac Toe</h1>

  
</div>



## About The Project

This project is an implementation of the popular paper-and-pencil game called Tic Tac Toe. The game is played by two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner. It is a solved game, with a forced draw assuming best play from both players.

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With


* [React.js](https://reactjs.org/) (Client)
* [Express.js](https://expressjs.com/) (Server)
* [Typescript](https://www.typescriptlang.org/) (Client and Server)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
1. Download the latest version of node at (https://nodejs.org/en/download/). 

2. Download the latest version of npm. 
    ```sh
    npm install npm@latest -g
    ```

### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/kaelfdl/tictactoe-ts.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```

### Local Setup

For server setup
1. Switch to the server directory
    ```sh
    cd server
    ```
2. Start local server
   ```sh
   npm run dev
   ```

For client setup
1. In a new shell, switch to the client directory
    ```sh
    cd client
    ```
2. Start the react app
   ```sh
   npm start
   ```
<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

Head over to the tic tac toe app on (http://localhost:3000). 
<br/>
<br/>
Player X plays first.
<br/>
<br/>
To start, click on a square.
<br/>
<br/>
Once a square clicked, the square will be marked with an 'X' or an 'O', and the next player will take their turn to mark another square.
<br/>
<br/>
If the game is over, click the restart button to load a new board.


<p align="right">(<a href="#top">back to top</a>)</p>

## Improvement Proposals

Improvements to be made for future iterations:
* Adding a scoreboard
* Creating configurations for development and production environments
* Unit testing for functions in the Game.tsx
* Refactoring component styles


## Error Cases
* When connection to the server is lost, the client app does not notify the user unless a request is made to the server; a page refresh is needed to clear the UI if the connection is lost.
