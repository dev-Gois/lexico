import React, { useState, useEffect } from 'react'
import { Square } from './Square'
import { useGeneral } from '../contexts/GeneralContext'

export const SquareLine = ({current, word, id}) => {

  const { results, wordError, currentWord } = useGeneral();
  const [opacity, setOpacity] = useState('')
  const [lineAnimation, setLineAnimation] = useState('')

  useEffect(() => {
    current ? setOpacity('') : setOpacity('opacity-20')
  }, [current])
  
  useEffect(() => {
    if(wordError && currentWord == id) { 
      setLineAnimation('animate-shake animate-infinite animate-ease-in animate-duration-[350ms]')
      setTimeout(() => {
        setLineAnimation('')
      }, 1800)
    }
  }, [wordError])

  return (
    <div className={`flex justify-center gap-3 ${opacity} ${lineAnimation} `}>
        <Square letter={word ? word[0] : ''} result={results[id] ? results[id][0] : 2} position={0} id={id} />
        <Square letter={word ? word[1] : ''} result={results[id] ? results[id][1] : 2} position={1} id={id} />
        <Square letter={word ? word[2] : ''} result={results[id] ? results[id][2] : 2} position={2} id={id} />
        <Square letter={word ? word[3] : ''} result={results[id] ? results[id][3] : 2} position={3} id={id} />
        <Square letter={word ? word[4] : ''} result={results[id] ? results[id][4] : 2} position={4} id={id} />
    </div>
  )
}
