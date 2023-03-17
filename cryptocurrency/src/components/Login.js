import React, {useContext, useState} from 'react'
import { AuthContext } from '../context/CryptoContext';
import '../stylesheets/Login.css'



export const Login = () => {    
  const [userDTO, setUserDTO] = useState({
    name: '',
    email: '',
    password: ''
  });  

  const { signIn } = useContext(AuthContext)

  const onChangeUserDTO = ({target}) => {
    
    const {name, value} = target;
    setUserDTO({
      ...userDTO,
      [name]: value,
    });

  }; 

  const manejarEnvio = e => {
    e.preventDefault()

    signIn(userDTO);
  };

  return (
    <div className="form">
      <form onSubmit={ () => manejarEnvio } >
        <div className="input-container">
          <label>Name</label>
          <input type="text" name="name" required 
          onChange = {onChangeUserDTO} />
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="email" name="email" required 
           onChange = {onChangeUserDTO} />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="password" required 
           onChange = {onChangeUserDTO} />
        </div>
        <div className="button-container">
          <button  onClick={manejarEnvio} type="submit">ddd</button>
        </div>
      </form>
    </div>
    
  )
}


export default Login;