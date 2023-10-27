import { KEYBOARD_SPECIAL_CODES } from "./constants"
import { KeyInfo } from "./interfaces"

export const getRandomElement = (arr: string[]) =>
  arr.length ? arr[Math.floor(Math.random() * arr.length)] : undefined

export const hasEmpty = (arr: string[]) => {
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i]
    if (element === '') {
      return true
    }
  }
  return false
}

export const markKeyPressed = (keyboardRow: KeyInfo[], keyPressed: string) => {
  return [...keyboardRow].map(k => {
    let letter = (keyPressed || '').charAt(3)
    if (KEYBOARD_SPECIAL_CODES.includes(keyPressed || '')) {
      letter = keyPressed || ''
    }

    if ((k.key === 'Delete' && keyPressed === 'Backspace') || k.key === letter) {
      k.isPressed = true
    }
    return k
  })
}

export const resetKeboard = (keyboardRow: KeyInfo[]) => {
  return keyboardRow.map(k => {
    k.isPressed = false
    return k
  })
}

export const secondsToTime = (secs: number) => {
  let hours = Math.floor(secs / (60 * 60))

  let divisor_for_minutes = secs % (60 * 60)
  let minutes = Math.floor(divisor_for_minutes / 60)

  let divisor_for_seconds = divisor_for_minutes % 60
  let seconds = Math.ceil(divisor_for_seconds)

  let obj = {
    "h": hours,
    "m": minutes,
    "s": seconds
  }
  return obj
}

export const getTimeTwoDigits = (digit: number) => {
  if (`${digit}`.length === 1) {
    return `0${digit}`
  }
  return digit
}
