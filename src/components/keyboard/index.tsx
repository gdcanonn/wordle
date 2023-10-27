import cx from 'classnames'
import { useWordleContext } from '../../contexts/wordle.context'
import KeyboardRow from './components/keyboardRow'
import useKeyboard from "./hooks/useKeyboard"

const Keyboard: React.FC = () => {
  const [{ lightTheme }] = useWordleContext()
  const { keyboardRow1, keyboardRow2, keyboardRow3, handleKeyClick } = useKeyboard()

  return (
    <div className={cx(
      'w-keyboard',
      { 'bg-wgray-100': lightTheme },
      { 'bg-wdark-150': !lightTheme }
    )}>
      <div className='pl-7'>
        <KeyboardRow keyboardRow={keyboardRow1} onClick={handleKeyClick} />
      </div>
      <div className='pl-11 pr-3'>
        <KeyboardRow keyboardRow={keyboardRow2} onClick={handleKeyClick} />
      </div>
      <KeyboardRow keyboardRow={keyboardRow3} onClick={handleKeyClick} />
    </div>
  )
}

export default Keyboard
