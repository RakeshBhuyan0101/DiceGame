import React, { useState } from "react";

function RollDice({ randomDiceNumber, handelDice, resetScore }) {
  return (
    <div className=" mt-12">
      <div className="flex flex-col justify-center items-center ">
        <div className="">
          <img
            className="w-[200px] rounded-lg invert "
            src={`/dices/dice_${randomDiceNumber || 1}.png`}
            alt="image"
          />
        </div>
        <div onClick={handelDice} className="flex flex-col mt-[40px]">
          <button className="border rounded-md px-12 py-3 m-5 hover:bg-gray-600 hover:text-white">
            Roll me
          </button>
          <button
            onClick={resetScore}
            className="border rounded-md px-12 py-3 m-5 hover:bg-gray-600 hover:text-white "
          >
            Reset Score{" "}
          </button>
        </div>
      </div>

      <div className="bg-[#FBF1F1]  w-1/2 ml-4 p-6  grip place-items-center mt-10 ">
        <h3 className="text-xl font-bold">How to play dice game ? </h3>
        <ul className="ml-4 text-sm">
          <li>Select any number</li>
          <li>Click on roll me button</li>
          <li>
            after click on dice if selected number is equal to dice number you
            will get same point as dice{" "}
          </li>
          <li>if you get wrong guess then 2 point will be dedcuted</li>
        </ul>
      </div>
    </div>
  );
}

export default RollDice;
