import { Modal } from "@mui/material"
import cx from 'classnames'
import { useEffect, useRef } from "react"
import { useWordleContext } from "../../contexts/wordle.context"
import { getTimeTwoDigits } from "../../utils"
import useBoard from "../board/hooks/useBoard"

const ModalStats: React.FC = () => {
  const [{ showStats, lightTheme, matches, victories, hiddenWord, finished, successed, time }] = useWordleContext()
  const { reinitBoxes } = useBoard(false)

  const prevHiddenWordRef = useRef<string>(hiddenWord)

  useEffect(() => {
    prevHiddenWordRef.current = hiddenWord
  }, [hiddenWord])

  return (
    <Modal
      open={showStats}
      onClose={() => reinitBoxes()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={cx(
        'w-modal',
        { 'bg-wdark-200 text-white border-wgray-400': !lightTheme }
      )}>
        <span className="text-3xl flex justify-center mt-10 font-bold">Estadísticas</span>

        <div className="flex justify-around">
          <div className="w-stat">
            <span className="text-3xl font-bold">{matches}</span>
            <span className="text-xl">Jugadas</span>
          </div>
          <div className="w-stat">
            <span className="text-3xl font-bold">{victories}</span>
            <span className="text-xl">Victorias</span>
          </div>
        </div>

        {finished && !successed && <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <span className="text-md my-4">La palabra era: <span className="font-bold">{prevHiddenWordRef.current}</span></span>
          </div>
        </div>}

        <div className="flex justify-center">
          <div className="flex flex-col items-center">
            <span className="text-md my-4">SIGUIENTE PALABRA</span>
            <span className="text-xl mb-4 font-bold">{`${getTimeTwoDigits(time.m || 0)}:${getTimeTwoDigits(time.s || 0)}`}</span>
          </div>
        </div>

        <div className="flex justify-center">
          <button className="w-btn" onClick={() => reinitBoxes()}>
            Aceptar
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalStats
