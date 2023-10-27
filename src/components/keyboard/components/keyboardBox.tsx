import cx from 'classnames'
import deleteWhiteIcon from '../../../assets/delete-white.svg'
import deleteIcon from '../../../assets/delete.svg'
import { useWordleContext } from '../../../contexts/wordle.context'

type Props = {
  letter: string,
  pressed: boolean,
  onClick: (key: string) => void
}

const KeyboardBox: React.FC<Props> = ({ letter, pressed, onClick }: Props) => {
  const [{ lightTheme }] = useWordleContext()

  return (
    <div tabIndex={0}
      className={cx(
        'w-box-keyboard',
        { 'w-[71px]': letter === 'Delete' || letter === 'Enter' },
        { 'text-sm': letter === 'Enter' },
        { 'bg-wgray-400': pressed },
        { 'text-white': pressed },
        { 'bg-wgray-200 text-wgray-600': (!pressed && lightTheme) },
        { 'bg-wdark-250 text-white': !lightTheme }
      )}
      onClick={() => onClick(letter)}
    >
      {letter === 'Delete' ? (
        pressed || !lightTheme ? <img src={deleteWhiteIcon} alt='delete' /> : <img src={deleteIcon} alt='delete' />
      ) : (
        <span>{letter.toUpperCase()}</span>
      )}
    </div>
  )
}

export default KeyboardBox
