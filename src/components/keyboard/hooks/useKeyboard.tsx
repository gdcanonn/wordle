import { useCallback, useEffect, useState } from "react"
import { useWordleContext, useWordleSetState } from "../../../contexts/wordle.context"
import { hasEmpty, markKeyPressed, resetKeboard } from "../../../utils"
import { BOX_STATUS, EMPTY_BOX, KEYBOARD_CODES, KEYBOARD_ROW_1, KEYBOARD_ROW_2, KEYBOARD_ROW_3, KEYBOARD_SPECIAL_CODES } from "../../../utils/constants"
import { KeyInfo } from "../../../utils/interfaces"

const useKeyboard = () => {
  const [{ boxes, showStats, hiddenWord, matches, victories }] = useWordleContext()
  const { setBoxes, setShowStats, setMatches, setVictories, setFinished, setSuccessed } = useWordleSetState()

  const [keyboardRow1, setKeyboardRow1] = useState<KeyInfo[]>(KEYBOARD_ROW_1)
  const [keyboardRow2, setKeyboardRow2] = useState<KeyInfo[]>(KEYBOARD_ROW_2)
  const [keyboardRow3, setKeyboardRow3] = useState<KeyInfo[]>(KEYBOARD_ROW_3)

  const getStatusFromHiddenWord = (index: number, key: string) => {
    const letter = hiddenWord?.charAt(index)
    const chars = hiddenWord.split('')

    let status = BOX_STATUS.empty
    if (letter === key) {
      status = BOX_STATUS.existMatched
    } else if (chars.includes(key)) {
      status = BOX_STATUS.existNotMached
    } else if (!chars.includes(key)) {
      status = BOX_STATUS.notExits
    }
    return status
  }

  const handleDeleteKey = () => {
    let matriz = boxes.map(row => row.slice())
    for (let i = 0; i < matriz.length; i++) {
      const row = matriz[i].map(b => b.key)
      if (hasEmpty(row)) {
        for (let j = 0; j < matriz[i].length; j++) {
          if (matriz[i][j].key === '' && j > 0) {
            matriz[i][j - 1] = EMPTY_BOX
            setBoxes(matriz)
            return
          }
        }
      }
    }
  }

  const handleKeyClick = (key: string) => {
    if (key === 'Enter') {
      // TO-DO: Is no so clear what to do with this key
    } else if (key.toLowerCase() === 'delete' || key.toLowerCase() === 'backspace') {
      handleDeleteKey()
    } else {
      let matrix = boxes.map(inner => inner.slice())

      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
          const box = matrix[i][j]
          if (box.key === '') {
            matrix[i][j] = { key, status: getStatusFromHiddenWord(j, key) }
            setBoxes(matrix)

            if (j === 4) { // If it's the last letter to check
              const success = matrix[i].map(b => b.status).filter(b => b === BOX_STATUS.existMatched).length === 5
              if (success) {
                setMatches(matches + 1)
                setVictories(victories + 1)
                setShowStats(true)
                setFinished(true)
                setSuccessed(true)
              } else if (i === 4) {
                setMatches(matches + 1)
                setShowStats(true)
                setFinished(true)
              }
            }
            return
          }
        }
      }
    }
  }

  const handleKeyDown = useCallback((e: Partial<KeyboardEvent>) => {
    if (e.repeat || !e.code || showStats) return

    setKeyboardRow1(markKeyPressed(keyboardRow1, e.code))
    setKeyboardRow2(markKeyPressed(keyboardRow2, e.code))
    setKeyboardRow3(markKeyPressed(keyboardRow3, e.code))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boxes, showStats, hiddenWord])


  const handleKeyUp = useCallback((e: Partial<KeyboardEvent>) => {
    if (showStats) return

    setKeyboardRow1(resetKeboard(keyboardRow1))
    setKeyboardRow2(resetKeboard(keyboardRow2))
    setKeyboardRow3(resetKeboard(keyboardRow3))

    if (KEYBOARD_CODES.includes(e.code || '')) {
      handleKeyClick((e.code || '').charAt(3))
    } else if (KEYBOARD_SPECIAL_CODES.includes(e.code || '')) {
      handleKeyClick(e.code || '')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [boxes, showStats, hiddenWord])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return function cleanup() {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleKeyDown, handleKeyUp])

  return {
    keyboardRow1,
    keyboardRow2,
    keyboardRow3,
    handleKeyClick
  }
}

export default useKeyboard
