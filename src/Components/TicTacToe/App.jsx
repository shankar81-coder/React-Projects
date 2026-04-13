import { useEffect, useState } from "react";
import "../TicTacToe/game.css";

function Square({ value, onClick }) {
  return (
    <button className={`square ${value}`} onClick={onClick}>
      {value}
    </button>
  );
}

function Game() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function handleClick(getCurrentSquares) {
    let cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[getCurrentSquares]) return;
    cpySquares[getCurrentSquares] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
    }

    return null;
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus(`This is a draw Please Restart the game`);
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)} Please Restart the game`);
    } else {
      setStatus(`Next Player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  function handleRestart() {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  }

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square onClick={() => handleClick(0)} value={squares[0]} />
        <Square onClick={() => handleClick(1)} value={squares[1]} />
        <Square onClick={() => handleClick(2)} value={squares[2]} />
      </div>

      <div className="row">
        <Square onClick={() => handleClick(3)} value={squares[3]} />
        <Square onClick={() => handleClick(4)} value={squares[4]} />
        <Square onClick={() => handleClick(5)} value={squares[5]} />
      </div>

      <div className="row">
        <Square onClick={() => handleClick(6)} value={squares[6]} />
        <Square onClick={() => handleClick(7)} value={squares[7]} />
        <Square onClick={() => handleClick(8)} value={squares[8]} />
      </div>
      <h1>{status}</h1>
      {getWinner(squares) || squares.every((item) => item !== "") ? (
        <button onClick={handleRestart}>Restart</button>
      ) : null}
    </div>
  );
}

export default Game;
