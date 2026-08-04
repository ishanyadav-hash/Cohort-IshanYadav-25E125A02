import axios from "axios";
import { useEffect, useState } from "react";

function Profile() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        async function getProfile() {
            try {
                const res = await axios.get("http://localhost:3000/users/profile",{withCredentials: true});
                setUser(res.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        getProfile();
    }, []);
    if (!user) {
        return <h2>Loading...</h2>;
    }
    return (
        <>
        <h1>Welcome {user.name}</h1>
        <p>Email: {user.email}</p>
        <p>Registration No: {user.regd_no}</p>
        <p>Age: {user.age}</p>
        </>
    );
}

export default Profile;