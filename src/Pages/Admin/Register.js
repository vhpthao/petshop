import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

import Header from './components/Header'

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if(localStorage.getItem("user-info")){
      navigate("/add");
    }
    
  }, [navigate]);

  const handleRegister = async () => {
    let item = {name, email, password};
    console.log("item truyền vào", item);

    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      }
    });

    result = await result.json();
    console.log("result", result);

    localStorage.setItem("user-info", JSON.stringify(result));
    
    // navigate('/add');
    navigate('/home');

  }


  return (
    <>
     <Header/>
    <div className='registerPage col-sm-6 offset-sm-3'>
      
       <h1 className='text-center mt-3'>Register page</h1>
       
       <label>Name</label>
       <input className='form-control' type='text' onChange={(e) => setName(e.target.value)} value={name}/>

       <label>Email</label>
       <input className='form-control' type='email'  onChange={(e) => setEmail(e.target.value)} value={email}/>

       <label>Password</label>
       <input className='form-control' type='password'  onChange={(e) => setPassword(e.target.value)} value={password}/>

       <button className='btn btn-primary offset-sm-5 mt-5' onClick={handleRegister}>Register</button>
    </div>
    </>
  )
}

export default Register