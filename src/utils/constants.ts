import { BoxInfo, KeyInfo } from "./interfaces"

export enum BOX_STATUS {
  existMatched = 'existMatched',
  existNotMached = 'existNotMached',
  notExits = 'notExits',
  empty = 'empty'
}

export const EMPTY_BOX = { key: '', status: BOX_STATUS.empty }

export const initBoxes = (): BoxInfo[][] => {
  let matrix = Array(5).fill(Array(5))
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      matrix[i][j] = EMPTY_BOX
    }
  }
  return matrix
}

export const KEYBOARD_CODES = [
  'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP',
  'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'KeyÑ',
  'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM'
]

export const KEYBOARD_SPECIAL_CODES = ['Enter', 'Delete', 'Backspace']

export const KEYBOARD_ROW_1: KeyInfo[] = [
  { key: 'Q', isPressed: false },
  { key: 'W', isPressed: false },
  { key: 'E', isPressed: false },
  { key: 'R', isPressed: false },
  { key: 'T', isPressed: false },
  { key: 'Y', isPressed: false },
  { key: 'U', isPressed: false },
  { key: 'I', isPressed: false },
  { key: 'O', isPressed: false },
  { key: 'P', isPressed: false }
]

export const KEYBOARD_ROW_2: KeyInfo[] = [
  { key: 'A', isPressed: false },
  { key: 'S', isPressed: false },
  { key: 'D', isPressed: false },
  { key: 'F', isPressed: false },
  { key: 'G', isPressed: false },
  { key: 'H', isPressed: false },
  { key: 'J', isPressed: false },
  { key: 'K', isPressed: false },
  { key: 'L', isPressed: false },
  { key: 'Ñ', isPressed: false }
]

export const KEYBOARD_ROW_3: KeyInfo[] = [
  { key: 'Enter', isPressed: false },
  { key: 'Z', isPressed: false },
  { key: 'X', isPressed: false },
  { key: 'C', isPressed: false },
  { key: 'V', isPressed: false },
  { key: 'B', isPressed: false },
  { key: 'N', isPressed: false },
  { key: 'M', isPressed: false },
  { key: 'Delete', isPressed: false },
]
