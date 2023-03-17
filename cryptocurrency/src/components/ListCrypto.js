import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from "../context/CryptoContext";


const ListCrypto = () => {
  const [cryptos, setCryptos] = useState({
    data: []
  });
  
  const { signOut } = useContext(AuthContext);
  const [input, setInput] = useState("");

  const changeInput = e => {
    setInput(e.target.value); 
  };   
  
  const getFetch = async () => {    

    const resp = await fetch("https://api.coinlore.net/api/tickers/");
    const data = await resp.json();     
    setCryptos(data);

 }

  useEffect(() => {
      getFetch();
  }, []);
  return (
    <>     
      <form 
        /* className='tarea-formulario' */
        onSubmit={(e) => e.preventDefault()}
      > 
        <input
          /* className='tarea-input'  */
          type='text'
          placeholder='Filter'
          name='texto'
          onChange={changeInput}
          value={input}
        />
        <button /* className='tarea-boton' */> 
          Add a task
        </button>
      </form>
      <button onClick={signOut}>Sign Out</button>
      { <div>
          {
            cryptos && cryptos.data.filter((crypto) => crypto.name.toLowerCase().includes(input.toLowerCase())).map((crypto) => (
              <div key={crypto.nameid}>
                {crypto.nameid} - {crypto.price_usd} - {crypto.symbol}
              </div>
              )    
            )            
          }    
        </div>
      }
    </>
  )



}

export default ListCrypto;
