import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Contact = (props) => {
  
  
  const [aboutUser, setAboutUser] = useState({
    _id: "", name: "", email: "", phone: ""
  });
  
  const navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const response = await fetch('https://mernwebkd.vercel.app/about', {
        method: 'GET',
        headers:
        {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include",
        mode: 'cors'
      });
      const data = await response.json();
      setAboutUser(data);
    } catch (err) {
      console.log(err);
      navigate('/Login');
    }
  }
  useEffect(() => {
    callAboutPage();
  },[]);
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setAboutUser({ ...aboutUser, [name]: value });
    
  }
  
  return (
    <>
      <section className="hero-info contact-section">
        <div className="container">
          <div className="hero-content">
            <h3>Contact</h3>
            <a href="tel:+917627078091">7627078091</a>
          </div>
          <div className="hero-content">
            <h3>Email Id</h3>
            <a href="mailto:kushalkumar1416@gmail.com">kushalkumar1416@gmail.com</a>
          </div>
          <div className="hero-content">
            <h3>Address</h3>
            <address>Ajmer Rajasthan</address>
          </div>
        </div>
      </section>
      <section className="contact-section section-message">
        <div className="container">

          <form action='https://formspree.io/f/mgejpnnn' method="post"  >
            <div className="name-box">
              <div className="form-items">
                <input type="text" name="name" className="form-control" onChange={handleChange} value={aboutUser.name} id='name' required='required' />
                <label htmlFor="name">Name</label>
              </div>
              <div className="form-items">
                <input type="email" name="email" className="form-control" onChange={handleChange} value={aboutUser.email} id='email' required='required' />
                <label htmlFor="email">Email</label>

              </div>
            </div>

            <div className="form-items">
              <label htmlFor="message"></label>
              <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3" placeholder='Say Hi!...'></textarea>
            </div>
            <button type="submit" className="btn">
              <i className="zmdi zmdi-mail-send"></i><span>Send</span></button>
          </form>
        </div>
      </section>
      
    </>
  )
}

export default Contact

