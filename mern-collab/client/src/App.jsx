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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  }
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;