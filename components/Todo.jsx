import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useState } from 'react'
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';            
import EditIcon from '@mui/icons-material/Edit';
import { EditTodo } from './EditTodo';
import { useQueryClient } from '@tanstack/react-query';
import { delTodo, updateCompleted } from './utils';


export const Todo = ({id,task,completed}) => {
    const [open, setOpen] = useState(true);
    const queryClient=useQueryClient()

    const handleDelet=async()=>{
        await delTodo(id)
        queryClient.invalidateQueries()
    }
    const handleDone=async()=>{
        await updateCompleted(id)
        queryClient.invalidateQueries()
    }
    const handleEdit=async()=>{
        setOpen(true)
        queryClient.up
    }

  return (
    <>
    <ListItem disablePadding>
        <ListItemButton>
            <ListItemIcon onClick={handleDone} sx={{color:completed?"none":"lime"}}><CheckIcon/></ListItemIcon>
            <ListItemText primary={task} sx={{textDecoration:completed?"line-through":"none"}}/>
            <ListItemIcon sx={{color:"lightblue"}} onClick={handleEdit}><EditIcon/></ListItemIcon>
            <ListItemIcon sx={{color:"red"}}><DeleteIcon onClick={handleDelet}/></ListItemIcon>
        </ListItemButton>
    </ListItem>
    <Divider/>
    {open && <EditTodo open={open} setOpen={setOpen} task={task} id={id}/>}
    </>
  )
}
