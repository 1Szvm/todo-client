import { useState } from 'react';
import { Header } from '../components/Header';
import { Login } from '../components/Login';
import './App.css'
import { Logout } from '../components/Logout';
import { Todolist } from '../components/TodoList';
import { AddTodo } from '../components/AddTodo.jsx';
import {QueryClientProvider,QueryClient} from '@tanstack/react-query'

const queryClient=new QueryClient()

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(true)
  return (
    <QueryClientProvider client={queryClient}>
      <div className='app'>
        <Header/>
        {isLoggedIn ? 
        <>
          <AddTodo/>
          <Todolist/>
          <Logout setIsLoggedIn={setIsLoggedIn}/>
        </>
        :
        <Login setIsLoggedIn={setIsLoggedIn}/>}
      </div>
    </QueryClientProvider>
  )
}

export default App
