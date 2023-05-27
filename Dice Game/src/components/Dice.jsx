import '../css/Dice.css'
import Die from "./Die";
const Dice = ({ dice, color = "lightblue" }) => {

   return (
      <div className="Dice ">
         {dice.map((v, i) => <Die val={v} key={i} color={color} />)}
      </div>
   )
}

export default Dice;