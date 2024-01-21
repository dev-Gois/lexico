import React from 'react'
import { Key } from './Key'
import { useGeneral } from '../contexts/GeneralContext'

export const Keyboard = () => {

  const { keyboardResults, addLetter } = useGeneral();

  return (
    <div className='space-y-2' >
        <div className='flex justify-center gap-2'>
            <Key currentKey='Q' result={keyboardResults['q']} addLetter={addLetter} />
            <Key currentKey='W' result={keyboardResults['w']} addLetter={addLetter} />
            <Key currentKey='E' result={keyboardResults['e']} addLetter={addLetter} />
            <Key currentKey='R' result={keyboardResults['r']} addLetter={addLetter} />
            <Key currentKey='T' result={keyboardResults['t']} addLetter={addLetter} />
            <Key currentKey='Y' result={keyboardResults['y']} addLetter={addLetter} />
            <Key currentKey='U' result={keyboardResults['u']} addLetter={addLetter} />
            <Key currentKey='I' result={keyboardResults['i']} addLetter={addLetter} />
            <Key currentKey='O' result={keyboardResults['o']} addLetter={addLetter} />
            <Key currentKey='P' result={keyboardResults['p']} addLetter={addLetter} />
        </div>  
        <div className='flex justify-center gap-2'>
            <Key currentKey='A' result={keyboardResults['a']} addLetter={addLetter} />
            <Key currentKey='S' result={keyboardResults['s']} addLetter={addLetter} />
            <Key currentKey='D' result={keyboardResults['d']} addLetter={addLetter} />
            <Key currentKey='F' result={keyboardResults['f']} addLetter={addLetter} />
            <Key currentKey='G' result={keyboardResults['g']} addLetter={addLetter} />
            <Key currentKey='H' result={keyboardResults['h']} addLetter={addLetter} />
            <Key currentKey='J' result={keyboardResults['j']} addLetter={addLetter} />
            <Key currentKey='K' result={keyboardResults['k']} addLetter={addLetter} />
            <Key currentKey='L' result={keyboardResults['l']} addLetter={addLetter} />
        </div>
        <div className='flex justify-center gap-2'>
            <Key currentKey='Z' result={keyboardResults['z']} addLetter={addLetter} />
            <Key currentKey='X' result={keyboardResults['x']} addLetter={addLetter} />
            <Key currentKey='C' result={keyboardResults['c']} addLetter={addLetter} />
            <Key currentKey='V' result={keyboardResults['v']} addLetter={addLetter} />
            <Key currentKey='B' result={keyboardResults['b']} addLetter={addLetter} />
            <Key currentKey='N' result={keyboardResults['n']} addLetter={addLetter} />
            <Key currentKey='M' result={keyboardResults['m']} addLetter={addLetter} />
        </div>
    </div>
  )
}
