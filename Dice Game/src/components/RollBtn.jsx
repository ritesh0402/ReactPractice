import '../css/RollBtn.css'
const RollBtn = ({ reroll }) => {

   return (
      <button className="RollBtn" onClick={reroll}>Roll</button>
   )
}

export default RollBtn;