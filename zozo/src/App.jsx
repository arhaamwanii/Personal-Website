import React from "react"
import { Player } from "./Components/Player"
import { useState } from "react"
import { Gameboard } from './Components/Gameboard';


function App() {

  const [activePlayer , setActivePlayer] = useState('X')

  function handleActivePlayer(){
  setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? "O" : "X")
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
        <Player intialName="Enter Name " symbol="X" />
        <Player intialName="Enter Name"symbol="O"/>
        </ol>
        <Gameboard onSelectSquare={handleActivePlayer}/>
      </div>

      <h1>React Tic-Tac-Toe</h1>
    </main>
  )
}

export default App




