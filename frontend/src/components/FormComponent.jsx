import { useState } from "react"
import axios from "axios"

function FormComponent(){
    const [name,setName]=useState("");
    const [regd_no,setRegno]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [age,setAge]=useState("");
    
    async function handleClick(e){
        e.preventDefault();

        if (password.length < 8) {
            alert("Password must be at least 8 characters.");
            return;
        }

        if (regd_no.length !== 10) {
        alert("Registration number must be exactly 10 characters.");
        return;
    }
        const user={
            name,regd_no,email,password,age
        };

        try{
            const res = await axios.post("http://localhost:3000/users/",user)
            alert("User created successfully")
            setName("");
            setRegno("");
            setEmail("");
            setPassword("");
            setAge("");
        } catch(error){
            console.log(error)
        }
    }

    return(
        <>
        <div className="min-h-screen min-w-screen flex justify-center items-center">
        <form onSubmit={handleClick}>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Enter Registration no." value={regd_no} onChange={(e)=>setRegno(e.target.value)}/>
            <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input type="text" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)}/>

            <button type="submit">Submit</button>
        </form>
        </div>
        </>
    )
}

export default FormComponent