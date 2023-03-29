import React,{useEffect,useState} from 'react';
import { useNavigate } from "react-router-dom";

const Spinner = () => {
    const [count,setCount] = useState(5)
    const navigate = useNavigate()

    useEffect(()=>{
        
    },[])
  return (
    <>
    <div className="d-flex justify-content-center align-items-center bg-success" style={{height:'100vh'}}>
  <div className="spinner-grow text-dark" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>

    </>
  )
}

export default Spinner