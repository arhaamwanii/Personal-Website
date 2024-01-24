import React from 'react'
import { useState } from 'react'

export const Gameboard = () => {

const initialGameBoard=[
    [null , null , null],
    [null , null , null],
    [null , null , null]
]
//to store the value of the box, o x 
   const [gameBoard , setGameBoard] = useState(initialGameBoard)

   function handleSelectSquare(rowIndex , colIndex ,  symbol ){
    setGameBoard((prevGameBoard) => {
        prevGameBoard[rowIndex][colIndex ] = 'x';
        return prevGameBoard
    } )
    //to update what it contains
    //
   }

  return (
    <>

    <ol id='game-board'>
        {initialGameBoard.map((row , rowIndex) => <li key={rowIndex}>
        <ol>
            
            {row.map((playerSymbol , colIndex) => <li key={colIndex}><button>{playerSymbol}</button></li> )}
        </ol>
        </li> )}
     
    </ol>  
    {/* takes array as an input*/}
    {/* we need key identify it in a uique way*/}
    </>
  )
}

let myArrray = [1 , 3 , 54 ,3 ]

myArrray.map((value) => {
    console.log(value * 0)
})

//creating the ann arry which contaitns the game board
//the thing is that ecm
//map is used to create/accepted 
//index is not tied to the data it is going to be tiend to the location of the data 