import React, { useState } from "react";

function NumberSelector({selectedNumber, setSelectedNumber ,  setIsSelected}) {
  const arr = [1, 2, 3, 4, 5, 6];

  return (
    <div>
      <div className="flex gap-5  items-center ">
        {arr.map((value, i) => (
          <div
            key={i}
            onClick={() => {setSelectedNumber(value); setIsSelected(true) } }
            className={`size-12  border flex justify-center items-center hover:cursor-pointer ${selectedNumber === value ? "bg-black text-white" : "bg-white text-black"} `}
          >
            {value}
          </div>
        ))}
      </div>
      <div className="font-bold text-lg mt-5 text-right ">Select number {selectedNumber }</div>
    </div>
  );
}

export default NumberSelector;
