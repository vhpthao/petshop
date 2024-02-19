import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../User/components/Header';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if(localStorage.getItem("user-info")){;
      navigate("/home");

    }
  }, [navigate]);

  const handleLogin = async () => {
    let item = { email, password };
  
    console.log("Item passed to login function", item);
  
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    });
  
    result = await result.json();
  
    console.log("Result after login", result);
  
    if (result.error) {
      console.error(result.error);
    } else {
      localStorage.setItem("user-info", JSON.stringify(result));
      navigate("/home");

    }
  }
  

  return (
    <>
      <Header />
      <div className='loginPage col-sm-6 offset-sm-3'>
        <h1 className='text-center mt-3'>Login Page</h1>
        <label>Email</label>
        <input type='email' onChange={(e)=> setEmail(e.target.value)} value={email} className='form-control'/>
        <label>Password</label>
        <input type='password' onChange={(e) => setPassword(e.target.value)} value={password} className='form-control'/>

        <button className='btn btn-primary offset-sm-5 mt-5' onClick={handleLogin}>Login</button>
      </div>
    </>
  )
}

export default Login;
