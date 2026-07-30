import { useNavigate } from "react-router-dom";

function Profile() {

    const navigate = useNavigate();

    function logout() {
        navigate("/");
    }

    return (
        <div className="min-h-screen bg-gray-100">

            <nav className="bg-blue-600 text-white flex justify-between px-8 py-4">
                <h1 className="text-2xl font-bold">
                    User Profile
                </h1>

                <button
                    onClick={logout}
                    className="bg-red-500 px-4 py-2 rounded"
                >
                    Logout
                </button>
            </nav>

            <div className="flex justify-center mt-12">

                <div className="bg-white shadow-lg rounded-lg w-[450px] p-8">

                    <h2 className="text-2xl font-bold mb-6">
                        Welcome, Ishan
                    </h2>

                    <div className="space-y-3">

                        <p>
                            <strong>Name :</strong> Ishan
                        </p>

                        <p>
                            <strong>Registration No :</strong> 25E125A02
                        </p>

                        <p>
                            <strong>Email :</strong> ishan@gmail.com
                        </p>

                        <p>
                            <strong>Age :</strong> 20
                        </p>

                    </div>

                    <div className="flex justify-between mt-8">

                        <button
                            className="bg-yellow-500 text-white px-4 py-2 rounded"
                        >
                            Update Profile
                        </button>

                        <button
                            className="bg-red-600 text-white px-4 py-2 rounded"
                        >
                            Delete Account
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Profile;