import React from 'react'
import { useState } from 'react'

export const Gameboard = (onSelectSquare , activePlayerSymbol) => {

const initialGameBoard=[
    [null , null , null],
    [null , null , null],
    [null , null , null]
]


   const [gameBoard , setGameBoard] = useState(initialGameBoard)

   function handleSelectSquare(rowIndex , colIndex  ){
    setGameBoard((prevGameBoard) => {
        const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
        updatedBoard[rowIndex][colIndex ] = activePlayerSymbol;
        return updatedBoard
    } )
    onSelectSquare();
   }
  return (
    <>

    <ol id='game-board'>
        {gameBoard.map((row , rowIndex) => <li key={rowIndex}>
        <ol>
            {row.map((playerSymbol , colIndex) => 
            <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex , colIndex)} >{playerSymbol}</button>
            </li> )}
        </ol>
        </li> )}
    </ol>  

    </>
  )
}

//state
//shit is fucked up less go
    {/* takes array as an input*/}
    {/* we need key identify it in a uique way*/}
//creating the ann arry which contaitns the game board
//the thing is that ecm
//map is used to create/accepted 
//index is not tied to the data it is going to be tiend to the location of the data 