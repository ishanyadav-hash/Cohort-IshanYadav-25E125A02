import { useState } from "react"

function FormComponent(){
    const [name,setName]=useState("");
    const [regno,setRegno]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [age,setAge]=useState(0);
    
    function handleClick(e){
        e.preventDefault();
    }

    return(
        <>
        <div className="min-h-screen min-w-screen flex justify-center items-center">
        <form onSubmit={handleClick}>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>{e.target.value}}/>
            <input type="text" placeholder="Enter Registration no." value={regno} onChange={(e)=>{e.target.value}}/>
            <input type="text" placeholder="Enter Email" value={email} onChange={(e)=>{e.target.value}}/>
            <input type="text" placeholder="Enter Password" value={password} onChange={(e)=>{e.target.value}}/>
            <input type="text" placeholder="Enter Age" value={age} onChange={(e)=>{e.target.value}}/>

            <button type="submit">Submit</button>
        </form>
        </div>
        </>
    )
}

export default FormComponent