import React, { useState } from 'react';

import styles from "./styles.css"

export const Registration = ({ register }) => {
  const [userName, setUserName] = useState('');
  const [isInputValid, setIsInputValid] = useState(false);
  const [isShowWarning, setIsShowWarning] = useState(false);

  const registerUser = () => {
    if (!isInputValid) {
      setIsShowWarning(true);
      return;
    }
    register(userName);
  };

  const validateInput = (data) => {
    if (data.length >= 3) {
      setIsInputValid(true);
      return;
    }
    setIsInputValid(false);
  };

  const handleInputData = (event) => {
    setUserName(event.target.value);
    validateInput(event.target.value);
  };
  return (
    <div>
      <h2>Please, enter your Nickname</h2>
      <div className='register-container'>
        <div className='input-field'>
          <input type='text' value={userName} onChange={handleInputData} className="player-input"></input>
          {isShowWarning && <span className="input-warning">Username must be at least 3 characters long</span>}
        </div>
        <button onClick={registerUser} className="btn">Register</button>
      </div>
    </div>
  );
};
