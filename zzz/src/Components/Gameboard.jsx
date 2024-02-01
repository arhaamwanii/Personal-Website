import React from 'react'
import { useState } from 'react'



const initailGameBoard = [
    [null, null , null],
    [null, null , null],
    [null, null , null]
]

export const Gameboard = () => {
    const [gameBoard , setGameBoard] = useState(initailGameBoard);

    function handleSelectSquare(rowIndex , colIndex){
        setGameBoard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
            updatedBoard[rowIndex ][colIndex] = 'X'
            return updatedBoard;
        });
    }


  return (
   <ol id='game-board'>
    {initailGameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
            {row.map((col, colIndex)  =>
             <li key={colIndex}>

                 <button onClick={() => handleSelectSquare(rowIndex , colIndex)}>{col}</button> 

            </li> )}
        </ol>
    </li> )}
   </ol>
  )
}



//hadleSectSquare, this function is used determine the value which will be shown on to the screen -- and will update the game board based on the prvios state of the gameboard -- in which case it also has to update the value inside of the intial game boad which we build to store the data
//for this function to do change the value of the inital game board -- it needs to know exactly which value it has to change in that case we need to pass the location of the change which is in this case passed by row and col INDEX
//updated board which we can go 



//          prevGameBoard[rowIndex ][colIndex]
// as in this case what we have is that, prevGameBoard is just th  instance of the inital gameBoard we used  inside of this  funciton 
//as it is just a copy of the inital array we can then use the rwoIndex and colIndex to change the value specifically

// const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
////we got a brand new array with a brand new nested arrays which still stores all the previous values 
// in this way we are updating the value in an imutable way 

//while calling a function in an array in which 

//now insted of upgrading the value direlctly we update the array in an imutalble way which being that
//when your value is  an object or an array you are dealing with a reffernce value in js -- when we try to udate the value directly like --  prevGameBoard[rowIndex ][colIndex] = 'X'
// if we do it in the direct way     "prevGameBoard[rowIndex ][colIndex] = 'X'" the value will be updated immediately, 


//intial game board representing the value of the game board
//  .map takes an function as an input that will be called for every item it is being used on
// row index -- is a positon based valeing not the value based, here we can use it cause we are not swaping the values

//outer list item uses is used to createle list rows 
//inside of the same thing we use the inner value of the array to create the coulums

//once we got this arrangemet then we putt the buttons we want to be clicked and represent the value X or 0 inside there, for which we want the default value to be empty
