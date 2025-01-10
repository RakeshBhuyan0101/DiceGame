import React from 'react'

function TotalScore({score}) {
  return (
    <div>
        <div className=' text-center max-w-[100px]'>
            <h1 className='text-6xl '>{score}</h1>
            <p className='text-lg '> total score</p>
        </div>
    </div>
  )
}

export default TotalScore