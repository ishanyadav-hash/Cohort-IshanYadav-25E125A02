import { Link } from "react-router-dom";

function Login() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Login
                </h1>

                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        className="w-full border rounded-lg p-2"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border rounded-lg p-2"
                    />

                    <button
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center mt-5">
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-blue-600">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;