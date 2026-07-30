import { Link } from "react-router-dom";

function Signup() {
    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-96">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Create Account
                </h1>

                <form className="space-y-4">

                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full border rounded-lg p-2"
                    />

                    <input
                        type="text"
                        placeholder="Registration Number"
                        className="w-full border rounded-lg p-2"
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full border rounded-lg p-2"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full border rounded-lg p-2"
                    />

                    <input
                        type="number"
                        placeholder="Age"
                        className="w-full border rounded-lg p-2"
                    />

                    <button
                        className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
                    >
                        Sign Up
                    </button>

                </form>

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