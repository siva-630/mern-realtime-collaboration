// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import Register from './services/pages/register';
// const App = () => {

//   const [message, Setmessage] = useState("");

//   useEffect(() => {
//     axios.get("http://localhost:5000")
//       .then(res => {
//         console.log(res.data);
//         Setmessage(res.data);
        
//       }
        

//     )
//     .catch (error=> {
//       console.log(error.data);
      
      
//         })

//   },[])
//   return (
//     <>
//       <register/>
//     <div>App</div>
//     <div>{message}</div>
//     </>
    
//   )
// }

// export default App


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;