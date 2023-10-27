import { Modal } from "@mui/material"
import cx from 'classnames'
import { useWordleContext, useWordleSetState } from "../../contexts/wordle.context"
import { BOX_STATUS } from "../../utils/constants"
import Box from "../box"

const ModalInstructions: React.FC = () => {
  const [{ showInstructions, lightTheme }] = useWordleContext()
  const { setShowInstructions } = useWordleSetState()

  return (
    <Modal
      open={showInstructions}
      onClose={() => setShowInstructions(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className={cx(
        'w-modal',
        { ' bg-wgray-80': lightTheme },
        { 'bg-wdark-200 text-white border-wgray-400': !lightTheme }
      )}>
        <span className="text-3xl flex justify-center my-10">Cómo jugar</span>

        <div className="mx-10 text-md">
          <p className="mb-4">Adivina la palabra oculta en cinco intentos</p>
          <p className="mb-4">Cada intento debe ser una palabra válida de 5 letras.</p>
          <p className="mb-4">Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la palabra.</p>

          <p className="mb-4">Ejemplos</p>
          <div className="flex justify-center mx-4 my-4">
            <Box box={{ key: 'G', status: BOX_STATUS.existMatched }} black={lightTheme} />
            <Box box={{ key: 'A', status: BOX_STATUS.empty }} border black={lightTheme} bgWhite={lightTheme} />
            <Box box={{ key: 'T', status: BOX_STATUS.empty }} border black={lightTheme} bgWhite={lightTheme} />
            <Box box={{ key: 'O', status: BOX_STATUS.empty }} border black={lightTheme} bgWhite={lightTheme} />
            <Box box={{ key: 'S', status: BOX_STATUS.empty }} border black={lightTheme} bgWhite={lightTheme} />
          </div>

          <p className="mb-4">La letra G está en la palabra y en la posición correcta.</p>
          <div className="flex justify-center mx-4 my-4">
            <Box box={{ key: 'V', status: BOX_STATUS.empty }} border black={lightTheme} bgWhite={lightTheme} />
            <Box box={{ key: 'O', status: BOX_STATUS.empty }} border black={lightTheme} bgWhite={lightTheme} />
            <Box box={{ key: 'C', status: BOX_STATUS.existNotMached }} black={lightTheme} />
            <Box box={{ key: 'A', status: BOX_STATUS.empty }} border black={lightTheme} bgWhite={lightTheme} />
            <Box box={{ key: 'L', status: BOX_STATUS.empty }} border black={lightTheme} bgWhite={lightTheme} />
          </div>

          <p className="mb-4">La letra C está en la palabra pero en la posición incorrecta.</p>
          <div className="flex justify-center mx-4 my-4">
            <Box box={{ key: 'C', status: BOX_STATUS.empty }} border black={lightTheme} bgWhite={lightTheme} />
            <Box box={{ key: 'A', status: BOX_STATUS.empty }} border black={lightTheme} bgWhite={lightTheme} />
            <Box box={{ key: 'N', status: BOX_STATUS.empty }} border black={lightTheme} bgWhite={lightTheme} />
            <Box box={{ key: 'T', status: BOX_STATUS.empty }} border black={lightTheme} bgWhite={lightTheme} />
            <Box box={{ key: 'O', status: BOX_STATUS.notExits }} black={lightTheme} />
          </div>

          <p className="mb-7">La letra O no está en la palabra.</p>
          <p className="mb-10">Puede haber letras repetidas. Las pistas son independientes para cada letra.</p>
        </div>

        <div className="mx-10 mb-8 flex justify-center text-md">
          ¡Una palabra nueva cada 5 minutos!
        </div>

        <div className="flex justify-center">
          <button className="w-btn" onClick={() => setShowInstructions(false)}>
            !JUGAR¡
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalInstructions
