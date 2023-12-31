import { useCallback, useEffect } from "react"
import { getWord } from "../../../api/words"
import { useWordleContext, useWordleSetState } from "../../../contexts/wordle.context"
import { initBoxes } from "../../../utils/constants"

const useBoard = (findWord: boolean) => {
  const [{ finished, matches, blockedWords, showStats }] = useWordleContext()
  const {
    setHiddenWord, setShowStats, setBoxes, setFinished,
    setSuccessed, setMatches, setBlockedWords
  } = useWordleSetState()

  const validateExistingWord = (word: string) => {
    if (blockedWords.includes(word)) {
      getRamdomWord()
    } else {
      setBlockedWords([...blockedWords, word])
      setHiddenWord(word?.toUpperCase() || '')
      console.log(word?.toUpperCase())
    }
  }

  const getRamdomWord = async () => {
    const word = await getWord()
    validateExistingWord(word || '')
  }

  const reinitBoxes = () => {
    if (finished) {
      setBoxes(initBoxes())
      setFinished(false)
      setSuccessed(false)
      getRamdomWord()
    }
    setShowStats(false)
  }

  const reinitFromCountDown = useCallback(() => {
    setShowStats(!showStats)
    setBoxes(initBoxes())
    setSuccessed(false)
    setMatches(matches + 1)
    setFinished(true)
    getRamdomWord()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  useEffect(() => {
    findWord && getRamdomWord()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    reinitBoxes,
    reinitFromCountDown
  }
}

export default useBoard
