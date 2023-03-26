import React,{useState} from 'react'
import Layout from './../../components/Layout/Layout';
import  {toast} from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "../../styles/AuthStyles.css";

const Login = () => {
    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
   
    const navigate = useNavigate();

     //form function

     const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.post("/api/v1/auth/register",{
                email,password
            })
            if(res && res.data.success){
                toast.success(res.data.message);
                navigate("/login");
            }else{
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("Somthing went worng")
        }
    }
  return (
    <Layout title="Login-Eccha-Nir">
        <div className="form-container"style={{ minHeight: "90vh" }} >
            
            <form onSubmit={handleSubmit}>
            <h2 className="title">Login</h2>
 
  <div className="mb-3">
    
    <input type="email" value={email}onChange={(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail" placeholder="Enter Your Email" required/>
    
  </div>
  <div className="mb-3">
    
    <input type="password" value={password}  onChange={(e)=> setPassword(e.target.value)} className="form-control" id="exampleInputPassword" placeholder="Enter Your Password" required/>
  </div>

 
  
  <button type="submit" className="btn btn-primary">Login</button>
</form>

        </div>
    </Layout>
  )
}

export default Login