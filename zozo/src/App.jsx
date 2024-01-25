import React from "react"
import { Player } from "./Components/Player"
import { useState } from "react"
import { Gameboard } from './Components/Gameboard';
import { Log } from './Components/Log';


function App() {
  const[gameTurns , setGameTurns] =
  const [activePlayer , setActivePlayer] = useState('X')

  function handleActivePlayer(){
  setActivePlayer((currentActivePlayer) => currentActivePlayer === 'X' ? "O" : "X")
  setGameTurns(prevTurns => {
    const updatedTurns = [{turns}]
  })
  }


  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player"> 
        <Player intialName="Enter Name " symbol="X" isAcitive={activePlayer === "X"}/>
        <Player intialName="Enter Name" symbol="O" isAcitive={activePlayer === "O"}/>
        </ol>
        <Gameboard onSelectSquare={handleActivePlayer} activePlayerSymbol={activePlayer}/>
      </div>
      <h1>Log for who played what </h1>
    </main>
  )
}

export default App


//in this case we want to manage the data most of which is in the gameboard, current state and set state 

//managign the same data with more than one state -- you have be greate at everything to pull it off there is no way around it
//we need to make the value of the code such that it is A)updte the code and not switch the value inside of the buttton
//whenever the id 
//we pass the info about which pa;eur is acitve
//we didnt even have to do shit delberatelyy
//we need to make a function whose value will switch, when on a game board a button is clicked

//DEFINING THE CODE WE WROTE HERE
//GET THE ROOM GOING 
//DAYYAN EDITTING -- GET HIM TO EDIT FAST 
//HEAD SPACE CALM -- WALK + BANK + COFFE
//IMAGINE THINKING CUP - REGISTRATION
//MAKE STUDY PLAN HOW TO FINSSH SYALLIBUS
//





