import React from 'react'
import Footer from "./Footer"
import Header from "./Header"
import {Helmet} from "react-helmet";

const Layout = ({children,title,description,keywords,author}) => {
  return (
    <div>
      <Helmet>
                <meta charSet="utf-8" />
                <title>My Title</title>              
  <meta name="description" content="Free Web tutorials" />
  <meta name="keywords" content="HTML, CSS, JavaScript" />
  <meta name="author" content="John Doe" />        
            </Helmet>
        <Header/>
        <main style={{minHeight:"80vh"}}>
        {children}
        </main>
       <Footer/>
    </div>
  )
}

export default Layout