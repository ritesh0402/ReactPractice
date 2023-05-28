import ShoppingListForm from './ShoppingListForm'
import { v4 as uuid } from 'uuid'
import { useState } from 'react'

const ShoppingList = ({ }) => {
   const [list, setList] = useState([]);

   const addItem = (item) => {
      setList((oldList) => {
         return [...oldList, { ...item, id: uuid() }]
      })
   }

   return (
      <div>
         <h1>Shopping List</h1>
         <ul>
            {list.map((x) => <li key={x.id}>{x.item} - {x.qty}</li>)}
         </ul>
         <ShoppingListForm addItem={addItem} />
      </div>
   );
}

export default ShoppingList;