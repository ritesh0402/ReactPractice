import { useState } from 'react'
import './App.css'
import CssBaseline from '@mui/material/CssBaseline'
import TodoList from './components/TodoList'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CssBaseline />
      <NavBar />
      <TodoList />
    </>
  )
}

export default App
