import '../css/Die.css'
const Die = ({ key, color = "lightBlue", val }) => {

   return (
      <div className="Die" key={key} style={{
         backgroundColor: color
      }}>
         <h2>{val}</h2>
      </div>
   )
}

export default Die;