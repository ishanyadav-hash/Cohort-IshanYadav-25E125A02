import { Link } from "react-router-dom";
import FormComponent from "../components/FormComponent";

function Signup() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Create Account
                </h1>
                <FormComponent/>
                <p className="text-center mt-5">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600">
                        Login
                    </Link>
                </p>

            </div>
        </div>
    );
}

export default Signup;