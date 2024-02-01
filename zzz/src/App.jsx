import { Gameboard } from "./Components/Gameboard"
import { Player } from "./Components/Player"


function App() {
  

  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player intialName={"prop one"} symbol="X"/>
          <Player intialName={"prop two"} symbol="O"/>
       </ol>
      <Gameboard/>
      </div>
    </main>

  )
}

export default App

//on the basis of which player is playing, we need to  CHANGE THE COLOR of the player heading(player.jsx) 
// also based on the same value we need to we need to place the value "X" or "O" in the game board 

//this value i.e which player is playing is found in 

