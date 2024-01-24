import React from 'react'
import { useState } from 'react';


export const Player = ({intialName , symbol , isAcitive}) => {

const [ playerName, setPlayerName] = useState(intialName)
const [ isEditting , setIsEditting] = useState(false)

    function handleEditClick(){
        setIsEditting((isEditting) => !isEditting) 
    }
    
    function handleChange(event){
        console.log(event)
        setPlayerName(event.target.value);
    }

let showInput =  <span className="player-name">{playerName}</span>;


if (isEditting){
    showInput = <input type="text" required  value={playerName}  onChange={handleChange}/>
   
}

  return (
    
    <li className={isAcitive ? "active" : undefined }>

    <span>
        {showInput}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditClick}>{isEditting ? "Save" : "Edit" }</button>
    </li>

  )
}

//most of the code we are writting is suboptimal code


//shit can be used to Synamicall  y
//code
//SWITCHING BETWEEN PLAYERS ON THE CHESS BOARD 
//HIGHLIGHTING THE PLAYER WITH TURN NAME -- ADDING THE CLASS TO THE CLASS PLAYER
//WE NEED TO KNOW ABOU THE CURRENTLY ACTIVE PLAYER -- GIVE TWO SPEREATE COMPONENT ACESS TO THE SAME INFO

//when we log the text on the button which is inside the gameboard we pass a value to it from the parent compnent such that it swithces up the value which we also used in the gameboard
