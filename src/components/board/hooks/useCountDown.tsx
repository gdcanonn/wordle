import { useEffect, useRef } from "react"
import { useWordleSetState } from "../../../contexts/wordle.context"
import { secondsToTime } from "../../../utils"
import useBoard from "./useBoard"

const useCountDown = () => {
  const TIME_LIMIT = 300

  const { setTime } = useWordleSetState()
  const { reinitFromCountDown } = useBoard(false)
  const secounds = useRef(TIME_LIMIT)

  const countDown = () => {
    secounds.current = secounds.current - 1
    const time = secondsToTime(secounds.current)
    setTime(time)

    if (secounds.current === 0) {
      secounds.current = TIME_LIMIT
      reinitFromCountDown()
    }
  }

  useEffect(() => {
    const interval = setInterval(countDown, 1000)
    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {}
}

export default useCountDown
