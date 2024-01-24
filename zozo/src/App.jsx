import React from "react"
import { Player } from "./Components/Player"
import { useState } from "react"
import { Gameboard } from './Components/Gameboard';


function App() {


  return (
    <main>
      <div id="game-container">
        <ol id="players">
        <Player intialName="Enter Name " symbol="X" />
        <Player intialName="Enter Name"symbol="O"/>
        </ol>

      </div>
      <Gameboard/>
      <h1>React Tic-Tac-Toe</h1>
    </main>
  )
}

export default App


