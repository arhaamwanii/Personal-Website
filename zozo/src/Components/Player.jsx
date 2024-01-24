import React from 'react'
import { useState } from 'react';



export const Player = ({intialName , symbol}) => {

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
    
    <li>
    <span>
        {showInput}
      <span className="player-symbol">{symbol}</span>
    </span>
    <button onClick={handleEditClick}>{isEditting ? "Save" : "Edit" }</button>
    
    </li>

  )
}

//active class



