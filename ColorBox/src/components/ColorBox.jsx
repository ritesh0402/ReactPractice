import '../css/ColorBox.css'
import { useState } from 'react'
const ColorBox = (props) => {
   const [index, setIndex] = useState(Math.floor(Math.random() * props.colors.length) + 1)
   const changeColor = () => {
      setIndex(Math.floor(Math.random() * props.colors.length) + 1)
   }
   return (
      <div className="ColorBox" onClick={changeColor} style={{ backgroundColor: props.colors[index] }}>
      </div>
   )
}

export default ColorBox;