import React,{useContext,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {userContext} from '../App'
const Logout = () => {

    const {state,dispatch} = useContext(userContext);  
    const navigate = useNavigate();

    useEffect(()=>{
        fetch('/Logout',{
            method:'GET',
            headers:
            {
              Accept:"application/json",
              "Content-Type": "application/json"
            },
            credentials:"include",
        }).then((res)=>{
            dispatch({type:"USER", payload:false});
            navigate('/login',{replace:true});
            if(res.status!==200){
                const error= new Error(res.error);
                throw error;
              }
        }).catch((err)=>{
            console.log(err);
        })
    },[]);
  return (
    <div>
      
    </div>
  )
}

export default Logout
