import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../config.env'

const Signup = () => {
  const navigate = useNavigate();
  const [user,setUser]=useState({
    name:"",email:"",phone:"",password:"",cpassword:""
  });
  let name,value;
  const handleData=(e)=>{
    name=e.target.name;
    value=e.target.value;
    setUser({...user, [name]:value})
  }
  
  const postData= async(e)=>{
    e.preventDefault();
    const{ name, email, phone, password, cpassword}=user;
    
      const res = await fetch(`https://mern-kd-app-api.onrender.com/Signup`,{
      method:"POST",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,email,phone,password,cpassword
      })
    });
    
    const data = await res.json();
    if(!data || res.status===404){
      toast.warn('Fill all the field', {
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
      else{
        navigate('/login');
      }
      
    console.log(e);
    

  }

  return (
    <>
      <section className="signUp-section">
        <div className="container mt-5">
          <div className="box-contain">
            <div className="signup-content">
              <h2 className='mt-4'>Sign Up</h2>
              <form action='post' method='POST' className='signup-form'>
                <div className="signup-item">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account "></i>
                  </label>
                  <input type="text" name='name' id='name' 
                    value={user.name} 

                    onChange={handleData}
                    placeholder='Name'
                    />
                </div>
                <div className="signup-item">
                  <label htmlFor="email" className='label-control'>
                    <i className="zmdi zmdi-email "></i>
                  </label>
                  <input type="email" name='email' id='email' placeholder='Email id'
                    value={user.email} 
              
                    onChange={handleData}
                    />
                </div>
                <div className="signup-item">
                  <label htmlFor="phone" className='label-control'>
                    <i className="zmdi zmdi-phone "></i>
                  </label>
                  <input type="text" name='phone' id='phone' placeholder='Mobile no.'
                    value={user.phone} 

                    onChange={handleData}
                    />
                </div>
                <div className="signup-item">
                  <label htmlFor="password" className='label-control'>
                    <i className="zmdi zmdi-lock "></i>
                  </label>
                  <input type="password" name='password' id='password' placeholder='Create password'
                    value={user.password}

                    onChange={handleData}
                    />
                </div>
                <div className="signup-item">
                  <label htmlFor="cpassword" className='label-control'>
                    <i className="zmdi zmdi-lock "></i>
                  </label>
                  <input type="password" name='cpassword' id='cpassword' placeholder='Confirm password'
                    value={user.cpassword}

                    onChange={handleData}
                    />
                </div>
                <div className="submit">
                <NavLink to='/login'>Already registered!</NavLink>
                <button className='btn'
                  onClick={postData}
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

export default Signup
