import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginComponent(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");  
    const navigate= useNavigate()

    async function handleClick(e) {
        e.preventDefault();

        if (password.length < 8) {
            alert("Password must be at least 8 characters.");
            return;
        }

        const user={email,password};
        
        try{
            const res=await axios.post("http://localhost:3000/users/login",user,{withCredentials: true})
            setEmail("")
            setPassword("")

            if (res.data.status === "Success") {
                navigate("/profile");
            }

        } catch(error){
            console.log(error)
        }
    }

    return(
        <>
        <form onSubmit={handleClick}>
            <input type="text" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

            <button type="submit">Submit</button>
        </form>
        </>
    )
}

export default LoginComponent