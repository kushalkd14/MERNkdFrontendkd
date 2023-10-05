import React, {useEffect,useState} from 'react'
import image from '../images/about_pic.jpg'
import {useNavigate} from 'react-router-dom'
import '../config.env'
const About = () => {
  const[aboutUser,setAboutUser] = useState({
    _id:"", name:"", email:"", phone:""
  }); 
  const navigate = useNavigate();
  const callAboutPage = async () =>{
    try{
      const response =await fetch(`${process.env.REACT_LINK}/about`,{
        method:'GET',
        headers:
        {
          Accept:"application/json",
          "Content-Type": "application/json"
        },
        credentials:"include",
        mode: 'cors'
      });
      const data= await response.json();
      setAboutUser(data);
      
      if(!response.status===200 || !data){
        const error= new Error(response.error);
        throw error;
      }
      
    } catch(err){
      console.log(err);
      navigate('/Login');
    }
  }
  useEffect(() => {
    callAboutPage();
  },[""]);
  
  return (
    <section className="about-section"> 
        <div className="container">
          <div className="about-div grid">
            <div className="about-img-div">
              <img src={image} alt="" srcset="" />
            </div>
            <div className="about-data-div grid">
              <div className="data-content">
                <h4>User Id</h4>
                <h4>Name</h4>
                <h4>Email Id</h4>
                <h4>Contact No.</h4>
                
              </div>
              <div className="data-content">
                <p>{aboutUser._id}</p>
                <p>{aboutUser.name}</p>
                <p>{aboutUser.email}</p>
                <p>{aboutUser.phone}</p>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About

