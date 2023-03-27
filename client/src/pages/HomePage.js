import React from 'react'
import Banner from "../components/Layout/Banner";
import Layout from "../components/Layout/Layout"
import { useAuth } from "../context/auth" 
const HomePage = () => {
  const [auth,setAuth] = useAuth();
  return (
    <Layout>
      <Banner/>
        <h1>Home page</h1>
        <pre>{JSON.stringify(auth,null,4)}</pre>
    </Layout>
  )
}

export default HomePage