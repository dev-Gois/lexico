import React, { useEffect, useState } from 'react'
import { useGeneral } from '../contexts/GeneralContext'

export const Square = ({letter, result, position, id}) => {

  const [squareColor, setSquareColor] = useState('border-main-200')
  const [squareAnimation, setSquareAnimation] = useState('')
  const [currentCursor, setCurrentCursor] = useState('')

  const { currentWord, currentTile, setCurrentTile } = useGeneral();

  useEffect(() => {

    if (result != 2) {
      setSquareAnimation('animate-rotate-y animate-once')
      setSquareColor('border-main-200 bg-main-200');
    }

    setTimeout(() => {
      if (result == 0.5) {
        setSquareColor('border-result-middle bg-result-middle');
      } else if (result == 1) {
        setSquareColor('border-result-correct bg-result-correct');
      }
    }, 350);
  }, [result])

  useEffect(() => {
    if (position == currentTile && id == currentWord ) {
      setCurrentCursor('border-b-stone-700 border-b-8')
    } else {
      setCurrentCursor('')
    }
  }, [currentTile])

  return (
    <>
      <div className={`text-white border-4 w-[4vw] h-[7vh] rounded-lg flex justify-center items-center cursor-pointer ${currentCursor} ${squareAnimation} ${squareColor}`}
           onClick={() => {setCurrentTile(position)}} >
          <h1 className='text-[4vh] font-extrabold' >{letter}</h1>
      </div>
    </>
  )
}
