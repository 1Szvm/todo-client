import { TextField,Button } from '@mui/material'
import React, { useState } from 'react'
import { addTodo } from './utils'
import { useQueryClient } from '@tanstack/react-query'

export const AddTodo = () => {
    const [newTask,setNewTask]=useState("")

    const queryClient=useQueryClient()
   const handleAdd=async()=>{
        await addTodo({task:newTask})
        queryClient.invalidateQueries("todos")
        setNewTask("")
    }
  return (
    <div className='addtodos'>
        <TextField value={newTask} onChange={(e)=>setNewTask(e.target.value)} id="outlined-basic" sx={{backgroundColor:"lightgoldenrodyellow",borderRadius:"5px"}} label="add a new task..." variant="outlined" />
        <Button disabled={!newTask? true:false} variant="contained" onClick={handleAdd}>Add</Button>
    </div>
  )
}