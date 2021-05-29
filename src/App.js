import React, {useState} from "react";
import Board from './components/Board';
import calculateWinner from "./Helpers";
import './styles/styles.scss'


const App = () => {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);
  console.log(winner);

  const message = winner ? `Winner is ${winner}` : `Next Player is ${isXNext ? 'X' : 'O'}`;

  

  const handleSquareClick = (position) => {
    // If already clicked on a square, value will not be changed.
    if (board[position] || winner) {
      return;
    }

    setBoard((prev) => {
      return prev.map((square, pos) => {

        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }
        return square;
      });
    });

    setIsXNext((prev) => !prev);
  };


  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <h2>{message}</h2>
      <Board board = {board} handleSquareClick = {handleSquareClick} />
      <button type = "button" >Start New Game</button>
    </div>
  )
};

export default App;
