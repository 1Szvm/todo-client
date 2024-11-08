import axois from "axios"

const url="http://localhost:8000"

export const getTodos=async()=>{
    const response=await axois.get(url+"/todos")
    return response
}

export const delTodo=async(id)=>{
    const response=await axois.delete(url+"/todos/"+id)
    return response
}

export const updateCompleted=async(id)=>{
    const response=await axois.put(url+"/todos/completed/"+id)
    return response
}

export const updateTask=async(id,data)=>{
    const response=await axois.put(url+"/todos/task/"+id,data)
    return response
}

export const addTodo=async (data)=>{
    const response=await axois.post(url+"/todos",data)
    return response
}