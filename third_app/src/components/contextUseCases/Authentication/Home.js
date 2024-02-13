import React from "react";
import { useAuth } from "./AuthContext";

function Home() {
    const { user, login, logout } = useAuth();

    return (
        <div>
            {user ? (
                <>
                    <p>Welcome {user.username}</p>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <p>Please Log IN</p>
                    <button onClick={() => login({ username: 'John' })}>Login</button>
                </>

            )}


        </div>
    )
};

export default Home;