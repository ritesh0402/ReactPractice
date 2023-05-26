import '../css/DisplayPage.css'
import PropertyCard from "./PropertyCard";
const DisplayPage = (props) => {
   return (
      <div className="DisplayPage container d-flex g-3">
         {props.estates.map((item) => <PropertyCard {...item} />)}
      </div>
   )
}

export default DisplayPage;