import { useState, useEffect } from "react";
import { AuthContext } from "./CryptoContext";

export const AuthProvider = ({ children } ) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    
    useEffect(() => {
        if(localStorage.getItem('name')){
            setIsLoggedIn(true);            
        }
    },[localStorage.getItem('name')])
    
    const signIn = async (user) => { 
        try {    
            console.log(user);   
            const {name, email} = user;
            
            localStorage.setItem('name', name)
            localStorage.setItem('email', email)
            setIsLoggedIn(true);
            return user   
        } catch (err) {
            console.log(err);
        }
    }

    const signOut = async (user) => { 
        try {          
            setIsLoggedIn(false)
            localStorage.removeItem('name'); 
            localStorage.removeItem('email');
            return null   
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                signIn,
                signOut
            }}
        >
            {children}
        </AuthContext.Provider>

    )
}