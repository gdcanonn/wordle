import React, { PropsWithChildren } from 'react'
import { createGenericContext } from '../lib/genericContext'
import { initBoxes } from '../utils/constants'
import { BoxInfo, Time } from '../utils/interfaces'


type WordleContext = {
  boxes: BoxInfo[][]
  blockedWords: string[]
  hiddenWord: string
  showStats: boolean
  showInstructions: boolean
  finished: boolean
  matches: number
  victories: number
  lightTheme: boolean
  successed: boolean
  time: Time
}

type UseWordleContext = [
  WordleContext,
  React.Dispatch<React.SetStateAction<WordleContext>>
]

const initialState: WordleContext = {
  boxes: initBoxes(),
  blockedWords: [],
  hiddenWord: '',
  showStats: false,
  showInstructions: false,
  finished: false,
  matches: 0,
  victories: 0,
  lightTheme: true,
  successed: false,
  time: {}
}

function useWordle(): UseWordleContext {
  const [state, setState] = React.useState<WordleContext>(initialState)
  return [state, setState]
}

// Generate context
const [useWordleContext, WordleContextProvider] = createGenericContext<UseWordleContext>()

// Generate provider
const WordleProvider: React.FC<PropsWithChildren> = (props: PropsWithChildren) => {
  const [Wordle, setWordle] = useWordle()

  return (
    <WordleContextProvider value={[Wordle, setWordle]}>
      {props.children}
    </WordleContextProvider>
  )
}

function useWordleSetState() {
  const [_, setState] = useWordleContext()

  const setBoxes = (boxes: BoxInfo[][]) => {
    setState(prev => ({
      ...prev,
      boxes
    }))
  }

  const setBlockedWords = (blockedWords: string[]) => {
    setState(prev => ({
      ...prev,
      blockedWords
    }))
  }

  const setHiddenWord = (hiddenWord: string) => {
    setState(prev => ({
      ...prev,
      hiddenWord
    }))
  }

  const setShowStats = (showStats: boolean) => {
    setState(prev => ({
      ...prev,
      showStats
    }))
  }

  const setShowInstructions = (showInstructions: boolean) => {
    setState(prev => ({
      ...prev,
      showInstructions
    }))
  }

  const setFinished = (finished: boolean) => {
    setState(prev => ({
      ...prev,
      finished
    }))
  }

  const setMatches = (matches: number) => {
    setState(prev => ({
      ...prev,
      matches
    }))
  }

  const setVictories = (victories: number) => {
    setState(prev => ({
      ...prev,
      victories
    }))
  }

  const setLightTheme = (lightTheme: boolean) => {
    setState(prev => ({
      ...prev,
      lightTheme
    }))
  }

  const setSuccessed = (successed: boolean) => {
    setState(prev => ({
      ...prev,
      successed
    }))
  }

  const setTime = (time: Time) => {
    setState(prev => ({
      ...prev,
      time
    }))
  }

  return {
    _,
    setBoxes,
    setBlockedWords,
    setHiddenWord,
    setShowStats,
    setShowInstructions,
    setFinished,
    setMatches,
    setVictories,
    setLightTheme,
    setSuccessed,
    setTime
  }
}

export {
  WordleProvider, useWordleContext, useWordleSetState
}

