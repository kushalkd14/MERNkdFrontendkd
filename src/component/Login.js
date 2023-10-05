import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { userContext } from '../App'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  // eslint-disable-next-line
  const {state,dispatch } = useContext(userContext);
  let navigate = useNavigate();
  const [loginUser, setLoginuser] = useState({
    email: "", password: ""
  });

  let name, value;
  const handleData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setLoginuser({ ...loginUser, [name]: value })
  }
  
  
  
  const userLogin = async (e) => {
    e.preventDefault();
    const { email, password } = loginUser;
    console.log({ email, password });
    const res = await fetch("https://mernwebkd.vercel.app/Login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        
        email, password
        
      })
      
    })
    
    const data = await res.json();
    if (res.status === 400 || !data) {
      // window.alert("invalid credentials");
      toast.error('Invalid credentials', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      
    }
    
    else if (data && res.status === 200) {
      dispatch({ type: "USER", payload: true });
      navigate("/");
      
      
    }
  }
  return (
    <>
      <section className="signUp-section">
        <div className="container mt-5">
          <div className="box-contain">
            <div className="signup-content">
              <h2 className='mt-4'>Sign In</h2>
              
              <form action='post' method='POST' className='signup-form'>

                <div className="signup-item">
                  <label htmlFor="email" className='label-control'>
                    <i className="zmdi zmdi-email "></i>
                  </label>
                  <input type="email" name="email" id='email'
                    value={loginUser.email}
                    onChange={handleData}
                    placeholder='Email id' />
                </div>

                <div className="signup-item">
                  <label htmlFor="password" className='label-control'>
                    <i className="zmdi zmdi-key "></i>
                  </label>
                  <input type="password" name="password" id='password'
                    value={loginUser.password}
                    onChange={handleData}
                    placeholder='Password' />
                </div>

                <div className="submit">
                  <NavLink to='/signup'>Don't have account</NavLink>
                  <button className='btn'
                    onClick={userLogin}
                  >Submit</button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
      <ToastContainer />

    </>
  )
}

export default Login
