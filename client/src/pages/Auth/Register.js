import React,{useState} from 'react'
import Layout from './../../components/Layout/Layout';

const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState("");
  return (
    <Layout title="Register-Eccha-Nir">
        <div className="register">
            <h1>Register Page</h1>
            <form>
  <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputName"
    placeholder="Enter Your Name" />
    
  </div>
  <div className="mb-3">
    
    <input type="email" className="form-control" id="exampleInputEmail" placeholder="Enter Your Email"/>
    
  </div>
  <div className="mb-3">
    
    <input type="password" className="form-control" id="exampleInputPassword" placeholder="Enter Your Password" />
  </div>

  <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputPhone" placeholder="Enter Your Phone Number"/>
    
  </div>
  <div className="mb-3">
    
    <input type="text" className="form-control" id="exampleInputAddress" placeholder="Enter Your Address" />
    
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>

        </div>
    </Layout>
  )
}

export default Register