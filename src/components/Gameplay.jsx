import React, { useState } from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RollDice from "./RollDice";

function Gameplay() {
  const [isSelected , setIsSelected] = useState(false)
  const [score ,setScore] = useState(0)
  const [selectedNumber, setSelectedNumber] = useState();
  const [randomDiceNumber , setRandomDiceNumber] =useState()


  function handelDice () {
    if(isSelected === false) {
      alert("Please select a number first")
      return;
    }
    const num = Math.floor(Math.random()*6 ) +1 
    setRandomDiceNumber(num)

   
    if(selectedNumber === num) {
      setScore(prev => prev+1)
    }
    else {
      setScore(prev => prev-2)
    }
    setSelectedNumber(undefined)
    setIsSelected(false)

  }

  function resetScore () {
    setScore(0);
    setSelectedNumber()
    setRandomDiceNumber()
    setIsSelected(false)
  }
  return (
    <>
      <div className="flex justify-between mt-7  mx-6">
        <TotalScore  score = {score}/>
        <NumberSelector selectedNumber= {selectedNumber} setSelectedNumber= {setSelectedNumber}  setIsSelected= {setIsSelected}   />
      </div>

      <RollDice randomDiceNumber={randomDiceNumber} handelDice={handelDice} resetScore={resetScore} /> 
        
    </>
  );
}

export default Gameplay;
