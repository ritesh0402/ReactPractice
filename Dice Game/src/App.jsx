import './App.css'
import LuckyDice from './components/LuckyDice'
import { sum } from './utility/utility'

function App() {
  const isLessThan7 = (dice) => sum(dice) <= 7;
  const isGreaterThan7 = (dice) => sum(dice) <= 7;
  const isEqualTo7 = (dice) => sum(dice) <= 7;
  return (
    <>
      <LuckyDice numDice={2} winCheck={isLessThan7} />
      <LuckyDice numDice={4} winCheck={isGreaterThan7} />
      <LuckyDice numDice={6} winCheck={isEqualTo7} />
    </>
  )
}

export default App
