import React,{useState} from 'react'
import Layout from './../../components/Layout/Layout';
import  {toast} from 'react-hot-toast'

const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");

    //form function

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name,email,password,phone,address)
        toast.success('Register Successfully')
    }
  return (
    <Layout title="Register-Eccha-Nir">
        <div className="register">
            <h1>Register Page</h1>
            <form onSubmit={handleSubmit}>
  <div className="mb-3">
    
    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="form-control" id="exampleInputName"
    placeholder="Enter Your Name" required />
    
  </div>
  <div className="mb-3">
    
    <input type="email" value={email}onChange={(e)=> setEmail(e.target.value)} className="form-control" id="exampleInputEmail" placeholder="Enter Your Email" required/>
    
  </div>
  <div className="mb-3">
    
    <input type="password" value={password}  onChange={(e)=> setPassword(e.target.value)} className="form-control" id="exampleInputPassword" placeholder="Enter Your Password" required/>
  </div>

  <div className="mb-3">
    
    <input type="text" value={phone} onChange={(e)=> setPhone(e.target.value)} className="form-control" id="exampleInputPhone" placeholder="Enter Your Phone Number" required/>
    
  </div>
  <div className="mb-3">
    
    <input type="text" value={address} onChange={(e)=> setAddress(e.target.value)} className="form-control" id="exampleInputAddress" placeholder="Enter Your Address" required/>
    
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
    </Layout>
  )
}

export default Register