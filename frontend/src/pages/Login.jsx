import { Link } from "react-router-dom"
import LoginComponent from "../components/LoginComponent"

function Login(){

    return(
        <>
        <div className="min-h-screen flex justify-center items-center bg-gray-500">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <h1 className="text-3xl font-bold text-center mb-6">Login Account</h1>
                <LoginComponent/>
                <p>Don't have an account?{" "}<Link to="/signup">Signup</Link></p>
            </div>
        </div>
        </>
    )
}

export default Login