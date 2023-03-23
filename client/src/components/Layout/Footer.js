import React from 'react'
import {  FaLinkedin,FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


const Footer = () => {
  return (
    
  <div className="bg-success text-center text-dark p-1">
    {/* Grid container */}
    <div className="container p-4 pb-0">
      {/* Section: Social media */}
      <section className="mb-4">
        {/* Facebook */}
        <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"><FaLinkedin/></a>
        {/* Twitter */}
        <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"><FaFacebook/></a>
        {/* Google */}
        <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"><FaInstagram/></a>
        {/* Instagram */}
        <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"><FaWhatsapp/></a>
        {/* Linkedin */}
        <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button"><HiOutlineMail/></a>
        
       
      </section>
      {/* Section: Social media */}
    </div>
    {/* Grid container */}
    {/* Copyright */}
    <div className="text-center p-2" >
      
      <h4 className="text-center">All Right Reserved &copy; Eccha-Nir</h4> 
    </div>
    {/* Copyright */}
     {/* Footer */}

        {/* */}
  </div>



 
    
    



  )
}

export default Footer