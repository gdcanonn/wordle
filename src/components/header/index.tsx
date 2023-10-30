
import cx from 'classnames'
import chartDark from '../../assets/chart-white.svg'
import chart from '../../assets/chart.svg'
import questionDark from '../../assets/question-white.svg'
import question from '../../assets/question.svg'
import skyDark from '../../assets/sky-dark.svg'
import sky from '../../assets/sky.svg'
import { useWordleContext, useWordleSetState } from '../../contexts/wordle.context'
import ModalInstructions from '../modals/modal-instructions'
import ModalStats from '../modals/modal-stats'

const Header: React.FC = () => {
  const [{ lightTheme }] = useWordleContext()
  const { setLightTheme, setShowStats, setShowInstructions } = useWordleSetState()

  const changeTheme = () => {
    const color = lightTheme ? '#262B3C' : 'white'
    document.body.style.backgroundColor = color
    setLightTheme(!lightTheme)
  }

  return (
    <>
      <div className={cx(
        'w-header',
        { 'bg-wgray-100 text-wdark-100': lightTheme },
        { 'bg-wdark-150 text-wgray-150': !lightTheme }
      )}>
        <div className='flex mx-2 cursor-pointer' onClick={() => setShowInstructions(true)}>
          {lightTheme ? <img src={question} alt='delete' /> : <img src={questionDark} alt='help' />}
        </div>

        <span className='text-4xl ml-36 mr-32 font-md'>WORDLE</span>

        <div className='flex mx-1 cursor-pointer' onClick={() => setShowStats(true)}>
          {lightTheme ? <img src={chart} alt='delete' /> : <img src={chartDark} alt='chart' />}
        </div>

        <div className='flex mx-1 cursor-pointer' onClick={changeTheme}>
          {lightTheme ? <img src={sky} width={60} height={30} alt='delete' /> : <img src={skyDark} width={60} height={30} alt='sky' />}
        </div>
      </div>

      <ModalStats />
      <ModalInstructions />
    </>
  )
}

export default Header
