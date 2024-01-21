import {useEffect} from 'react'
import { SquareLine } from './SquareLine'
import { useGeneral } from '../contexts/GeneralContext'

export const SquareGroup = () => {

  const { guesses, currentWord } = useGeneral();

  return (
    <div className='space-y-5' >
        <SquareLine current={currentWord >= 0} word={guesses[0]} id={0} />
        <SquareLine current={currentWord >= 1} word={guesses[1]} id={1} />
        <SquareLine current={currentWord >= 2} word={guesses[2]} id={2} />
        <SquareLine current={currentWord >= 3} word={guesses[3]} id={3} />
        <SquareLine current={currentWord >= 4} word={guesses[4]} id={4} />
        <SquareLine current={currentWord >= 5} word={guesses[5]} id={5} />
    </div>
  )
}
