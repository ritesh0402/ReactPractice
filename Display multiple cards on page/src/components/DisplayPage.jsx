import '../css/DisplayPage.css'
import PropertyCard from "./PropertyCard";
const DisplayPage = (props) => {
   return (
      <div className="DisplayPage container ">
         {props.estates.map((item) => <PropertyCard {...item} />)}
      </div>
   )
}

export default DisplayPage;