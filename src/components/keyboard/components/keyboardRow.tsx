import { KeyInfo } from "../../../utils/interfaces"
import KeyboardBox from './keyboardBox'

type Props = {
  keyboardRow: KeyInfo[],
  onClick: (key: string) => void
}

const KeyboardRow: React.FC<Props> = ({ keyboardRow, onClick }: Props) => {
  return (
    <div className='flex'>
      {keyboardRow.map((key: KeyInfo, index) => (
        <KeyboardBox
          key={index}
          letter={key.key}
          pressed={key.isPressed}
          onClick={onClick}
        />
      ))}
    </div>
  )
}

export default KeyboardRow
