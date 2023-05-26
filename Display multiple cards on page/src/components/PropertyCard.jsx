import '../css/PropertyCard.css'
const PropertyCard = (props) => {
   return (
      <div className="PropertyCard" key={props.id}>
         <div className="card" >
            <img src="../../public/vite.svg" className="card-img-top" alt={props.name} style={{ width: "220px" }} />
            <div className="card-body">
               <h5 className="card-title">{props.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
               <li className="list-group-item">Id: {props.id}</li>
               <li className="list-group-item">Rating: {props.rating}</li>
               <li className="list-group-item">Price: {props.price}</li>
            </ul>
         </div>
      </div>
   )
}

export default PropertyCard;