import '../css/LuckyDice.css'
import Dice from "./Dice";
import RollBtn from './RollBtn'
import { useState } from 'react'
import { getRolls } from '../utility/utility'

const LuckyDice = ({ numDice = 2, winCheck }) => {

   const reroll = () => {
      setDice(getRolls(numDice))
   }

   const [dice, setDice] = useState(getRolls(numDice))
   const isWinner = winCheck(dice);

   return (
      <div className="LuckyDice ">
         <h1>Welcome to the game of Lucky Dice</h1>
         <Dice dice={dice} color="lightblue" />
         <h2>{isWinner ? "You Won!!" : "Better Luck Next Time!!"}</h2>
         <RollBtn reroll={reroll} />
      </div>
   )
}

export default LuckyDice;