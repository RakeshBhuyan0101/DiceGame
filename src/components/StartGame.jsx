import React from "react";

function StartGame({toggle}) {
  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-1 items-center justify-evenly h-screen">
        <div >
          <img
            src="/dice.png"
            alt="dice image"
          />
        </div>

        <div>
          <div className="relative">
            <h3 className="text-8xl">DICE GAME </h3>
            <button onClick={toggle}  className="bg-black text-white px-12 py-3 rounded-md absolute  right-0 m-3 hover:bg-gray-700">Play Now </button>     
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartGame;
