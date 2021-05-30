import React, { useState } from "react";
import Board from './components/Board';
import calculateWinner from "./Helpers";
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import './styles/styles.scss'


const App = () => {

  const [history, setHistory] = useState([{ board: Array(9).fill(null), isXNext: true }]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const winner = calculateWinner(current.board);

  const handleSquareClick = (position) => {
    // If already clicked on a square, value will not be changed.
    if (current.board[position] || winner) {
      return;
    }

    setHistory((prev) => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });
    // setIsXNext((prev) => !prev);

    setCurrentMove(prev => prev + 1);
  };


  return (
    <div className="app">
      <h1>Tic Tac Toe</h1>
      <StatusMessage winner = {winner} current = {current}/>
      <Board board={current.board} handleSquareClick={handleSquareClick} />
      <History history={history} />
    </div>
  )
};

export default App;
