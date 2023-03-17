import React, { useContext } from 'react'
import Login from '../components/Login';
import '../stylesheets/HomeScreen.css'
import { AuthContext } from "../context/CryptoContext";
import ListCrypto from '../components/ListCrypto'

export const HomeScreen = () => {   
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);
   return (    
    <div /* className='HomeScreen' */>      
      {
        isLoggedIn ?  <ListCrypto /> : <Login />
      }
    </div>

    
   ) 
   
}

export default HomeScreen;