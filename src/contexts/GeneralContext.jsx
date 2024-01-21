import { createContext, useContext, useEffect, useState } from "react";
import { useModal } from "./ModalContext";
import words from '../utils/words.json'

const GeneralContext = createContext();

export const GeneralProvider = ({children}) => {

    const [currentWord, setCurrentWord] = useState(0)
    const [correctWord, setCorrectWord] = useState('')
    const [wordWithoutAccents, setWordWithoutAccents] = useState('')
    const [guesses, setGuesses] = useState([[], [], [], [], [], []])
    const [results, setResults] = useState([])
    const [keyboardResults, setKeyboardResults] = useState({})
    const [beforeWords, setBeforeWords] = useState([])
    const [lastPressed, setLastPressed] = useState('')
    const [currentTile, setCurrentTile] = useState(0)
    const [wordError, setWordError] = useState(false)
 
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    const { handleModal } = useModal();

    useEffect(() => {
      setNewWord();
      getBeforeWords();
    }, [])
    
    const setNewWord = () => {
      let possibleWords = words.filter(e => !beforeWords.includes(e))
      setCorrectWord(possibleWords[Math.round(Math.random() * possibleWords.length)])
    }

    const getBeforeWords = () => {
      const storageArray = localStorage.getItem('wordStorage');

      if(storageArray) {
        setBeforeWords(JSON.parse(storageArray))
      }
    }

    const handleSubmit = () => {
      if(guesses[currentWord].join('').length > 5) {
        const newArr = [...guesses]
        newArr[currentWord].pop()
        setGuesses(newArr)
      }

      if(words.some(word => normalizeString(word) === guesses[currentWord].join('').toLowerCase())) {
        let currentResult = []
        let currentKeys = keyboardResults
        for (let index = 0; index < guesses[currentWord].length; index++) {
          let letra = guesses[currentWord][index].toLowerCase();
          if (wordWithoutAccents[index] === letra) {
            currentResult.push(1)
            currentKeys[letra] = 1;
          } else if (wordWithoutAccents.includes(letra)) {
            currentResult.push(0.5)
            if (currentKeys[letra] != 1) {
              currentKeys[letra] = 0.5;
            }
          } else {
            currentResult.push(0)
            currentKeys[letra] = 0;
          }
        }
        const currentResults = [...results]
        currentResults.push(currentResult)
        setKeyboardResults(currentKeys)
        setResults(currentResults)
        checkWin();
        setCurrentWord(currentWord + 1)
        setCurrentTile(0)
      } else {
        handleModal("Palavra não permitida!")
        setWordError(true)
        setTimeout(() => {
          setWordError(false)
        }, 1800)
      }
    }

    const normalizeString = (str) => {
      return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    }

    const checkWin = () => {
      if(guesses[currentWord].join('').toLowerCase() === wordWithoutAccents) {
        handleModal('Parabéns! você conseguiu!')
        setTimeout(() => {
          addWordInStorage(correctWord);
          restartGame();
        }, 2400)
      } else if (currentWord === 5) {
        handleModal("Você perdeu! A palavra era: " + correctWord + " :(")
        setTimeout(() => {
          addWordInStorage(correctWord);
          restartGame();
        }, 2400)
      }
    }

    const addLetter = (letter) => 
      {
        if (currentTile <= 4) {
          const newGuesses = [...guesses];
          newGuesses[currentWord][currentTile] = letter
          setGuesses(newGuesses);
          setCurrentTile(currentTile+1)
          console.log(guesses)
        }
      }
    
    const removeLetter = () => {
      const newGuesses = [...guesses];
      newGuesses[currentWord][currentTile] = ' '
      setGuesses(newGuesses);
      if(currentTile >= 1) {
        setCurrentTile(currentTile-1)
      }
    }

    const addWordInStorage = (word) => {
      const newArr = beforeWords
      newArr.push(word)
      localStorage.setItem('wordStorage', JSON.stringify(newArr));
    }

    const restartGame = () => {
      window.location.reload(false);
    }

    const handleLastPressed = (letter) => {
      setLastPressed(letter);
      setTimeout(() => {
        setLastPressed('');
      }, 100)
    }

    const handleKeyUp = (e) => {
      console.log(currentTile)
      if(wordWithoutAccents === '') {
        setWordWithoutAccents(correctWord.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))
      }


      let letter = e.key.toUpperCase();
      if (ALPHABET.includes(letter)) {
        addLetter(letter);
        handleLastPressed(letter)
      } else if (letter == 'BACKSPACE') {
        removeLetter();
      } else if (letter == 'ENTER') {
        handleSubmit();
      } else if (letter == 'ARROWRIGHT') {
        if(currentTile < 5) {
          setCurrentTile(currentTile+1)
        }
      } else if (letter == 'ARROWLEFT') {
        if(currentTile >= 0) {
          setCurrentTile(currentTile-1)
        }
      }
    }

    return (
        <GeneralContext.Provider value={{ handleKeyUp, guesses, currentWord, results, keyboardResults, addLetter, lastPressed, currentTile, setCurrentTile, wordError }} >
            {children}
        </GeneralContext.Provider>
    )
}

export const useGeneral = () => {
    return useContext(GeneralContext);
}