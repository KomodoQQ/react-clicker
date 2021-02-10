import React, { useState } from "react";
import './App.css';

import { Game } from "./components/game/component"
import { Registration } from "./components/user-registration/component"

const App = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");

  const register = (userName) => {
    setUserName(userName);
    setIsUserLoggedIn(true);
  }

  const logout = () => {
    setIsUserLoggedIn(false);
  }

  return (
    <div className="App">
      {isUserLoggedIn 
        ? <Game user={userName} logout={logout}/> 
        : <Registration register={register}/>
      }
    </div>
  );
}

export default App;
