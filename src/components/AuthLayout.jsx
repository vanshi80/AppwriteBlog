import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// When authentication is true:
// This indicates that the page or component wrapped by AuthLayout requires the user to be authenticated (logged in).
// If the authStatus (from your Redux state) does not match true, meaning the user is not authenticated, the user is redirected to the
//  /login page. This ensures that only authenticated users can access this part of the application.
// When authentication is false:
// This means that the page or component does not require the user to be authenticated. Typically, you would set authentication to false
//  for pages like the login or registration page.If the user is already authenticated (i.e., authStatus is true), they are redirected 
//  to the homepage or some other part of the application (e.g., navigate("/")). This prevents authenticated users from accessing pages 
//  that don't make sense for them (like the login page after they've already logged in)

export default function AuthLayout({ children, authentication = true }) {
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector(state => state.auth.status);

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            navigate("/login");
        } else if (!authentication && authStatus !== authentication) {
            // authentication is false for the pages like the signup and login page 
            navigate("/");
        }
        setLoader(false);
    }, [authStatus, navigate, authentication])

    return loader ? <h1>Loading...</h1> : <>{children}</>

}