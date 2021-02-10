import React, { useState, useRef } from 'react';

import styles from './styles.css';

export const Game = ({ user, logout }) => {
  const [counter, setCounter] = useState(0);
  const [gameLength, setGameLength] = useState(5000);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGamePlayed, setIsGamePlayed] = useState(false);
  const [gameResult, setGameResult] = useState(0);
  const [bestResult, setBestResult] = useState(0);

  const countRef = useRef(counter);
  countRef.current = counter;

  const startGame = () => {
    setIsGameStarted(true);
    setIsGamePlayed(true);

    setTimeout(() => {
      if (bestResult < countRef.current) {
        setBestResult(countRef.current);
      }
      setGameResult(countRef.current);
      setCounter(0);
      setIsGameStarted(false);
    }, gameLength);
  };

  const playAgain = () => {
    setIsGamePlayed(false);
    setIsGameStarted(false);
  };

  const changeUser = () => {
    logout();
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const gameLengthHandler = (event) => {
    setGameLength(event.target.value);
  }
  return (
    <div>
      <h2>Welcome to the Clicker, {user}</h2>
      {!isGamePlayed && (
        <div className='game-intro'>
          <p>To start the game pick the time you want to play and press "Start" button</p>
          <select value={gameLength} onChange={gameLengthHandler}>
            <option value={5000}>5 seconds</option>
            <option value={10000}>10 seconds</option>
            <option value={15000}>15 seconds</option>
          </select>
          <button onClick={startGame} className="start-btn">Start</button>
        </div>
      )}
      {isGameStarted && (
        <div className='game-field'>
          <p>Game started</p>
          <div className='game-btn-container'>
            <button onClick={incrementCounter} className='game-btn'>
              Click
            </button>
            <span className='counter'>{counter}</span>
          </div>
        </div>
      )}
      {!isGameStarted && isGamePlayed && (
        <div className='game-result'>
          <p>Congratulation, your game score is: {gameResult} clicks</p>
          <p>Your highest result is: {bestResult}</p>
          <p>Do you want to play again?</p>
          <div className='confirmation-btns'>
            <button onClick={playAgain} className='yes-btn'>
              Yes
            </button>
            <button onClick={changeUser} className='no-btn'>
              No (Change Player)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
