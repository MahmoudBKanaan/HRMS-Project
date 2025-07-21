


import { createContext ,  useState, useEffect } from "react";


export const AuthContext = createContext(false);


export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [addUser, setAddUser] = useState(false)
    const [departments, setDepartments] = useState({})
    const [accounts, setAccounts] = useState({})
    

    
    
    
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
            
            const accountsvar = JSON.parse(localStorage.getItem("accounts"));
            const dept = JSON.parse(localStorage.getItem("departments"));
            if(accountsvar) {
                setAccounts({ ...accountsvar })
            }
            if(dept) {
                setDepartments({ ...dept })
            }
            setIsLoading(false);
            
        }, [])
        

        
        
        
        
        return (
            <AuthContext.Provider value={{
                isAuthenticated, setIsAuthenticated, 
                isLoading, setIsLoading, 
                isAdmin, setIsAdmin, 
                addUser , setAddUser,
            accounts, setAccounts,
            departments, setDepartments
        }} >
            {children}


        </AuthContext.Provider>
    )
}