
import { useWordleContext } from '../../contexts/wordle.context'
import { BoxInfo } from "../../utils/interfaces"
import Box from "../box"
import Header from "../header"
import Keyboard from '../keyboard'
import useBoard from './hooks/useBoard'
import useCountDown from './hooks/useCountDown'

const Board: React.FC = () => {
  const [{ boxes }] = useWordleContext()

  useBoard(true)
  useCountDown()

  return (
    <>
      {/** HEADER */}
      <Header />

      {/** BOXES */}
      <div className='container mx-auto w-fit'>
        {boxes.map((row: BoxInfo[], index) => (
          <div key={index} className='flex my-4'>
            {row.map((box: BoxInfo, index) => (
              <Box key={index} box={box} />
            ))}
          </div>
        ))}
      </div>

      {/** KEYBOARD */}
      <Keyboard />
    </>
  )
}

export default Board
