


import { createContext ,  useState, useEffect } from "react";


export const AuthContext = createContext(false);


export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    
    const getStoredToken = () => {
    return localStorage.getItem("token") || sessionStorage.getItem("token");}

    const getStoredIsAdmin = () => {
        return localStorage.getItem("isAdmin") || sessionStorage.getItem("isAdmin");
    }

    useEffect ( () => {
        const token = getStoredToken();
        const storedIsAdmin = getStoredIsAdmin();
        if (token) {
            setIsAuthenticated(true);
            if ( storedIsAdmin === "true"){
                setIsAdmin(true)
            }
        } else if (!token) {
            setIsAuthenticated(false);
            if (storedIsAdmin === "false"){
                setIsAdmin(false)
            }
        }
        setIsLoading(false);
        }, [])




    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, isLoading, setIsLoading, isAdmin, setIsAdmin}} >
            {children}


        </AuthContext.Provider>
    )
}