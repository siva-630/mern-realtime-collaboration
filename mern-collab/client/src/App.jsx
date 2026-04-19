import React, { useEffect, useState } from 'react'
import axios from "axios";
const App = () => {

  const [message, Setmessage] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000")
      .then(res => {
        console.log(res.data);
        Setmessage(res.data);
        
      }
        

    )
    .catch (error=> {
      console.log(error.data);
      
      
        })

  },[])
  return (
    <>
    <div>App</div>
    <div>{message}</div>
    </>
    
  )
}

export default App