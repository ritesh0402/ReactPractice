import List from '@mui/material/List';
import { useState } from 'react'
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { v4 as uuid } from 'uuid'
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const initialTodo = [
   { id: 1, text: "abcd", checked: false },
   { id: 2, text: "efgh", checked: true },
   { id: 3, text: "ijkl", checked: false },
   { id: 4, text: "lmno", checked: true },
   { id: 5, text: "pqrs", checked: true },
]

const getInitiandata = () => {
   const data = JSON.parse(localStorage.getItem("todos"))
   if (data) {
      return data
   } else {
      return initialTodo
   }
}

const TodoList = () => {
   const [todos, setTodos] = useState(getInitiandata);

   useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos))
   }, [todos])

   const handleToggle = (id) => {
      setTodos(oldList => {
         return oldList.map(e => {
            if (e.id === id) {
               return { ...e, checked: !e.checked }
            } else {
               return e
            }
         })
      })
   };

   const removeTodo = (id) => {
      setTodos(oldList => {
         return oldList.filter(e => e.id !== id)
      })
   }

   const addTodo = (todo) => {
      setTodos(oldList => {
         return [...oldList, { id: uuid(), text: todo, checked: false }]
      })
   }


   return (
      <Box sx={{
         display: 'flex',
         justifyContent: "center",
         flexDirection: "column",
         alignItems: "center",
         m: 3,
         textAlign: "center"
      }}>
         <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
            TodoList
         </Typography>
         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map((todo) => {
               return (
                  <TodoItem todo={todo} key={todo.id} handleToggle={() => { handleToggle(todo.id) }} removeTodo={() => { removeTodo(todo.id) }} />
               );
            })}
            <TodoForm addTodo={addTodo} />
         </List>
      </Box >
   )
}

export default TodoList;