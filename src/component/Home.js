import React, {useEffect, useState} from 'react'
import '../config.env'
const Home = () => {
  const [userName, setUserName] = useState("User");
  const [show, setShow] = useState(false);
  
  const HomePage = async () => {
    try {
        const response = await fetch(`https://mer-nkd-backend.vercel.app/`, {
        method: 'GET',
        headers:
        {
          Accept: "application/json",
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*'
        },
        credentials: "include",
        mode: 'cors'
      });
      const data = await response.json();
      setUserName(data.name);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    HomePage();
  },[]);

  return (
    <div>
      <div className="home-page">
        <div className="home">
          <p className='pt-2'>WELCOME</p>
          <h1>{userName}</h1>
          <h2>{show?"Happy To See You": "Haven't Login ?"}</h2>
        </div>
      </div>
    </div>
  )
}

export default Home
