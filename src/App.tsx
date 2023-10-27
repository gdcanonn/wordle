import Board from './components/board'
import { WordleProvider } from './contexts/wordle.context'

const App: React.FC = () => {
  return (
    <WordleProvider>
      <Board />
    </WordleProvider>
  )
}

export default App
