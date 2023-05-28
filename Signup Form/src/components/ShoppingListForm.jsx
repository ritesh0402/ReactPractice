import { useState } from 'react'
const ShoppingListForm = () => {

   const [formData, setFormData] = useState({
      shoppingItem: "",
      qty: "",
   })

   const updateForm = (evt) => {
      const updatedField = evt.target.name;
      const updatedValue = evt.target.value;
      setFormData((data) => {
         return { ...data, [updatedField]: updatedValue };
      })
   }

   const handleSubmit = (evt) => {
      evt.preventDefault()
      console.log(formData)
   }

   return (
      <div>
         <form action="" method="">
            <div>
               <label htmlFor="shoppingItem">Item: </label>
               <input
                  type="text"
                  id="shoppingItem"
                  name='shoppingItem'
                  placeholder="Item"
                  value={formData.shoppingItem}
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
            <button onSubmit={handleSubmit} >Submit</button>
         </form>
      </div>
   );
}

export default ShoppingListForm; 