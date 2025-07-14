


import { createContext ,  useState, useEffect } from "react";


export const AuthContext = createContext(false);


export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const getStoredToken = () => {
    return localStorage.getItem("token") || sessionStorage.getItem("token");}

    useEffect ( () => {
        const token = getStoredToken();
        if (token) {
            setIsAuthenticated(true);
        } else if (!token) {
            setIsAuthenticated(false);
        }
        setIsLoading(false);
        }, [])




    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, isLoading, setIsLoading}} >
            {children}


        </AuthContext.Provider>
    )
}