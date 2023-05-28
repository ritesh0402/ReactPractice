import TextField from '@mui/material/TextField';
import ListItem from '@mui/material/ListItem';
import Create from '@mui/icons-material/Create'
import { InputAdornment } from '@mui/material'
import { IconButton } from '@mui/material'
import { useState } from 'react'

function TodoForm({ addTodo }) {
   const [item, setItem] = useState("")

   const handleChange = (evt) => {
      setItem(evt.target.value)
   }
   const handleSubmit = (e) => {
      e.preventDefault()
      addTodo(item)
      setItem("")
   }

   return (
      <ListItem disablePadding>
         <form onSubmit={handleSubmit}>
            <TextField id="outlined-basic" label="Enter New Item" variant="outlined" onChange={handleChange} value={item}
               InputProps={{
                  endAdornment:
                     < InputAdornment position="end" >
                        <IconButton
                           aria-label="toggle password visibility"
                           edge="end"
                           onClick={handleSubmit}
                        ><Create />
                        </IconButton>
                     </InputAdornment>
               }}
            />
         </form>
      </ListItem >
   )
}

export default TodoForm


