import { getRandomElement } from "../utils"

export const getWord = async () => {
  const words = await fetch('words.txt').then(res => res.text())
  const words5Letters = words.match(/\b\w{5}\b/g) || []
  return getRandomElement(words5Letters)
}
