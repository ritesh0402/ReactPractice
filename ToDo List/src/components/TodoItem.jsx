import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function TodoItem({ todo, handleToggle, removeTodo }) {

   return (
      <ListItem
         secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
               <DeleteIcon />
            </IconButton>
         }
         disablePadding
      >
         <ListItemButton role={undefined} onClick={handleToggle} dense>
            <ListItemIcon>
               <Checkbox
                  edge="start"
                  checked={todo.checked}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': `checkbox-list-label-${todo.id}` }}
               />
            </ListItemIcon>
            <ListItemText id={`checkbox-list-label-${todo.id}`} primary={todo.text} />
         </ListItemButton>
      </ListItem>
   )
}

export default TodoItem