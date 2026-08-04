import { Link } from "react-router-dom"
import LoginComponent from "../components/LoginComponent"

function Login(){

    return(
        <>
        <h1>Login Account</h1>
        <LoginComponent/>
        <p>Don't have an account?{" "}<Link to="/signup">Signup</Link></p>
        </>
    )
}

export default Login