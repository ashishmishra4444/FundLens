import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props)=>{

    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    const[isAuthenticated,setIsAuthenticated]=useState(false);  

    useEffect(()=>{
        const storedUser=localStorage.getItem("user");
        if(storedUser){
            setUser(JSON.parse(storedUser));
            setIsAuthenticated(true);
        }
        setLoading(false);
    },[])

    const login = (userData)=>{
        setUser(userData);
        setIsAuthenticated(true);
        localStorage.setItem("user",JSON.stringify(userData));
    }

    const logout = ()=>{
        setUser(null);
        setIsAuthenticated(false);
        localStorage.removeItem("user");
    }


    const value = {user,loading,isAuthenticated,login,logout};
    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;