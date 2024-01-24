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
        <Player intialName="Enter Name " symbol="X" isAcitive={activePlayer === "X"}/>
        <Player intialName="Enter Name"symbol="O" isAcitive={activePlayer === "Y"}/>
        </ol>
        <Gameboard onSelectSquare={handleActivePlayer} activePlayerSymbol={activePlayer}/>
      </div>

      <h1>Log for who played what </h1>
    </main>
  )
}

export default App
//we pass the info about which pa;eur is acitve
//we didnt even have to do shit delberatelyy
//we need to make a function whose value will switch, when on a game board a button is clicked




