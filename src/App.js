import React, { useState } from "react";
import Board from './components/Board';
import calculateWinner from "./Helpers";
import StatusMessage from './components/StatusMessage';
import './styles/styles.scss'


const App = () => {

  const NEW_GAME = [
    { board: Array(9).fill(null), isXNext: true }];

  const [history, setHistory] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const {winner, winningSquares} = calculateWinner(current.board);

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

  const startNewGame = () => {
    setHistory(NEW_GAME );
    setCurrentMove(0);
  }

  return (
    <div className="app">
      <h1><span className = 'text-orange'>TIC</span> TAC <span className = 'text-green'>TOE</span> </h1>
      <StatusMessage winner = {winner} current = {current}/>
      <Board board={current.board} handleSquareClick={handleSquareClick} winningSquares = {winningSquares} />
      <button type="button" onClick = {startNewGame} className ={`btn-reset ${winner ? 'active' : ''}`}>Start New Game</button>
      <div className = 'bg-balls' />
    </div>
  )
};

export default App;
