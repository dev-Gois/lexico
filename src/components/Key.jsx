import {useState,useEffect} from 'react'
import { useGeneral } from '../contexts/GeneralContext'

export const Key = ({currentKey, result, addLetter}) => {

  const { lastPressed } = useGeneral()

  const [squareColor, setSquareColor] = useState('bg-main-200')
  const [squareAnimation, setSquareAnimation] = useState('')

  useEffect(() => {
    if (result == 0) {
      setSquareColor('bg-main-200 opacity-20')
    } else if (result == 0.5) {
      setSquareColor('bg-result-middle')
    } else if (result == 1) {
      setSquareColor('bg-result-correct')
    }
  }, [result])

  useEffect(() => {
    if(lastPressed === currentKey) {
      handleAnimation();
    }
  }, [lastPressed])

  const handleClick = () => {
    addLetter(currentKey)
    handleAnimation();
  }

  const handleAnimation = () => {
    setSquareAnimation('animate-jump animate-once')
    setTimeout(() => {
      setSquareAnimation('')
    }, 300)
  }

  return (
    <div onClick={handleClick} className={`font-extrabold w-[4vw] h-[7vh] ${squareColor} ${squareAnimation} cursor-pointer flex justify-center items-center rounded-lg`} >
        <h1 className='text-white text-[4vh] select-none' >{currentKey}</h1>
    </div>
  )
}
