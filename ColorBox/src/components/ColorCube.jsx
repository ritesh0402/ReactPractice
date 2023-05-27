import '../css/ColorCube.css'
import ColorBox from "./ColorBox";
const ColorCube = (props) => {
   const colorBoxArr = [];
   for (let i = 0; i < 25; i++) {
      colorBoxArr.push(<ColorBox colors={props.colors} />)
   }
   return (
      <div className="ColorCube ">
         {colorBoxArr.map(i => i)}
      </div>
   )
}

export default ColorCube;