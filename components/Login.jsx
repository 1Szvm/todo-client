import React from 'react'
import {TextField,Button} from "@mui/material"
import {useState} from 'react'

export const Login = ({setIsLoggedIn}) => {
    const [username,setUsername]=useState("")
    const [pw,setPw]=useState("")
    const [isValidUsername,setIsValidUsername]=useState(null)
    const [isValidPw,setIsValidPw]=useState(null)

    const handleLogin=()=>{
        console.log(username,pw);
        username==import.meta.env.VITE_USERNAME && pw==import.meta.env.VITE_PW? setIsLoggedIn(true):setIsLoggedIn(false)
    }
  return (
    <div className='login'>
        <TextField id="standard-basic" label="Username" variant="standard" value={username} onChange={(e)=>setUsername(e.target.value)} onBlur={()=>setIsValidUsername(username==import.meta.env.VITE_USERNAME)} error={!isValidUsername && isValidUsername!=null}/>
        <TextField id="standard-basic" label="Password" type="password" variant="standard" value={pw} onChange={(e)=>setPw(e.target.value)} onBlur={()=>setIsValidPw(pw==import.meta.env.VITE_PW)} error={!isValidPw && isValidPw!=null}/>
        <div style={{padding:"5px"}}>
            <Button variant="contained" onClick={handleLogin}>Login</Button>
        </div>
    </div>
  )
}