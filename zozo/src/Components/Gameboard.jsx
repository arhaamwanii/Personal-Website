import React from 'react'


export const Gameboard = ({onSelectSquare }) => {

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
                <button onClick={onSelectSquare} >{playerSymbol}</button>
            </li> )}
        </ol>
        </li> )}
    </ol>  

    </>
  )
}


//shit is fucked up less go, the code we wrote in the gameoard if would be written in the app.jsx all the components would have acess to it
//the highlighted button is not as clean as it
    {/* takes array as an input*/}
    {/* we need key identify it in a uique way*/}
//creating the ann arry which contaitns the game board
//the thing is that ecm
//map is used to create/accepted 
//index is not tied to the data it is going to be tiend to the location of the data 

/// in the game board component we should get the active player symbol prop