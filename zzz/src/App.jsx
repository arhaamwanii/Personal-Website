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

//make an edit button 

