import React from 'react'

const initailGameBoard = [
    [null, null , null],
    [null, null , null],
    [null, null , null]
]

export const Gameboard = () => {
  return (
   <ol id='game-board'>
    {initailGameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
            {row.map((col, colIndex)  => <li key={colIndex}> <button>{col}</button> </li> )}
        </ol>
    </li> )}
   </ol>
  )
}


//intial game board representing the value of the game board
//  .map takes an function as an input that will be called for every item it is being used on
// row index -- is a positon based valeing not the value based, here we can use it cause we are not swaping the values

//outer list item uses is used to createle list rows 
//inside of the same thing we use the inner value of the array to create the coulums

//once we got this arrangemet then we putt the buttons we want to be clicked and represent the value X or 0 inside there, for which we want the default value to be empty