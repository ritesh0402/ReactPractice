import { useState } from 'react'
// import {  } from '../utility'

const ShoppingListForm = ({ addItem }) => {

   const [formData, setFormData] = useState({
      item: "",
      qty: 0,
   })

   const updateForm = (evt) => {
      const updatedField = evt.target.name;
      const updatedValue = evt.target.value;
      setFormData((data) => {
         return { ...data, [updatedField]: updatedValue };
      })
   }



   const handleSubmit = (evt) => {
      evt.preventDefault();
      addItem(formData)
      setFormData({
         item: "",
         qty: 0,
      })
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <div>
               <label htmlFor="item">Item: </label>
               <input
                  type="text"
                  id="item"
                  name='item'
                  placeholder="Item"
                  value={formData.item}
                  onChange={updateForm}
               />
            </div>
            <div>
               <label htmlFor="qty">Quantity: </label>
               <input
                  type="number"
                  id="qty"
                  name='qty'
                  placeholder="Quantity"
                  value={formData.qty}
                  onChange={updateForm}
               />
            </div>
            <button>Submit</button>
         </form>
      </div>
   );
}

export default ShoppingListForm; 