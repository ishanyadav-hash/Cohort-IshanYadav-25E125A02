import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
            <h1 className="text-5xl font-bold mb-4">
                User Management System
            </h1>

            <p className="mb-8 text-gray-600">
                Register or login to manage your account.
            </p>

            <div className="space-x-4">
                <Link
                    to="/signup"
                    className="bg-blue-600 text-white px-5 py-2 rounded-lg"
                >
                    Sign Up
                </Link>

                <Link
                    to="/login"
                    className="bg-green-600 text-white px-5 py-2 rounded-lg"
                >
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Home;