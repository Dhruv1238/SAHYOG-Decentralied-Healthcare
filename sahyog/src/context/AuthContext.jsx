import { Auth, useAuth } from "@arcana/auth-react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";

const Login = ({ onLoginNavigateTo, heading }) => {
    const navigate = useNavigate();
    const auth = useAuth();

    useEffect(() => {
        console.log("auth in Login.js", auth);
        if (auth.isLoggedIn) {
            navigate(onLoginNavigateTo);
        }
    }, [auth, navigate, onLoginNavigateTo]);


    return (
        <div className="bg min-h-screen">
            <h1 className="text-center text-3xl p-8 font-black text-color2">
                {heading}
            </h1>
            {/* {auth.loading ? (
                <div className=" min-h-screen min-w-full backdrop:blur-md">
                    <Spinner />
                </div>
            ) : (
                <div>
                    <Auth
                        externalWallet={false}
                        theme="dark"
                        onLogin={() => {
                            navigate(onLoginNavigateTo);
                        }}
                    ></Auth>
                </div>
            )} */}
            <div>
                    <Auth
                        externalWallet={false}
                        theme="dark"
                        onLogin={() => {
                            navigate(onLoginNavigateTo);
                        }}
                    ></Auth>
                </div>
        </div>
    );
};

export default Login;
