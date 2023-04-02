import React from "react";
import SignIn from "../components/Signin/signin";

const Login = () => {

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
                    Sign in
                </h1>

                <SignIn />
                
            </div>
        </div>
    )
}

export default Login;