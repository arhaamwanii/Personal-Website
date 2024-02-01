import React from 'react'
import { useState } from 'react'

export const Player = ({name , symbol}) => {

  const [isEditting , setIsEditting ] = useState(false)

let edittingCheck = <span className="player-name">{name}</span>

function handleEditClick(){
  setIsEditting((e) => !e )

}



let showField = <span className="player-name">{name}</span>

if (isEditting){
  showField = <input type="text" required defaultValue={name} autoFocus onFocus={e => e.currentTarget.select()}/>
}


  return (
    <div>
       <ol id="players" >
      <li>
        <span>
          {showField}
          <span className="player-symbol">{symbol} </span>
        </span>
        <button onClick={handleEditClick} >{isEditting ? "Save" : "Edit"}</button>
      </li>
      </ol>
    </div>

    
  )
}


//this is used to make react alter the value of the state handle click
//to get the text on the
// each instance of a component reuse it nothing else changes, in the other use case  - most powerful super comlex stuff is going to be editted
//name should be what is the function of the component
//props is the main thing that interconnects all of this
//when the buttin is clicked the name input filed should be replaced by an real input fiels where we could enter in our name and stuff we
//when the edit button is cliked the the value of a variable should be altered and based on that the ui should be updated such that the input field jumps into existance and and the input should be taked 
//doing such that the edit button says save and also the main but

//ternary expression can change the value

//prepopulating the input field  with the current player name

//the ternary ! will flip the value in case of what is before