import cx from 'classnames'
import { useWordleContext } from '../../contexts/wordle.context'
import { BOX_STATUS } from '../../utils/constants'
import { BoxInfo } from '../../utils/interfaces'

type Props = {
  box: BoxInfo
  border?: boolean
  black?: boolean
  bgWhite?: boolean
}

const Box: React.FC<Props> = ({ box, border = false, black = false, bgWhite = false }: Props) => {
  const [{ lightTheme }] = useWordleContext()

  return (
    <div className={cx(
      'w-box',
      { 'border': border },
      { 'border-wgray-400': !lightTheme },
      { 'text-black': black },
      { 'bg-white': bgWhite },
      { 'bg-wdark-200': !bgWhite },
      { 'bg-wgray-300': lightTheme && box.status === BOX_STATUS.empty },
      { 'bg-wdark-300': !lightTheme && box.status === BOX_STATUS.empty },
      { 'bg-wgray-400': box.status === BOX_STATUS.notExits },
      { 'bg-wgreen-200': box.status === BOX_STATUS.existMatched },
      { 'bg-wyellow-200': box.status === BOX_STATUS.existNotMached },
    )}>
      <span>{box.key}</span>
    </div>
  )
}

export default Box
