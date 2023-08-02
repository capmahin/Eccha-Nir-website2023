import React from 'react'
import {  FaLinkedin,FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {AiFillHome} from 'react-icons/ai'
import { Link } from "react-router-dom";
import SearchInput from "../Form/SearchInput";

const Footer = () => {
  return (
    
  <div className="  bg-success text-center text-dark ">
   
  <div className=" text-center text-lg-start" >
  {/* Grid container */}
  <div className="container p-1">
    {/*Grid row*/}
    <div className="row mt-3">
      {/*Grid column*/}
      <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
        {/* <h5 className="text-uppercase mb-4">About company</h5>
        <p>
        আপনার কষ্টের টাকায় সঠিক পন্য প্রদানে আমরা প্রতিশ্রুতিওবদ্ধ ।
Always Stay as With EccheNir
        </p> */}
        
        <div className="mt-1 text-dark">
          {/* Facebook */}
          
          <a type="button" className="btn btn-outline-light btn-floating  m-1" href="https://www.facebook.com/ecchenir.com.bd/?ref=page_internal"><FaFacebook/></a>
          {/* Twitter */}
          <a type="button" className="btn btn-outline-light btn-floating  m-1" href="https://www.instagram.com/ecchenir/?fbclid=IwAR0dOUlGP_uyf4SBGlCML9Y4BYMyNcxL8F_qI6njM5uJ8fpFF2E-7GCGiBs"><FaInstagram /></a>
          {/* Google + */}
          
          <a type="button" className="btn btn-outline-light btn-floating  m-1" href="https://www.ecchenir@gmail.com"><HiOutlineMail /></a>
          {/* Linkedin */}
        </div>
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-4 pb-1">Search something</h5>
        <SearchInput/>
       
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
        {/* <h5 className="text-uppercase mb-4">Opening hours</h5> */}
        <table className="table text-center text-dark">
          <tbody className="font-weight-normal">
            {/* <tr>
              <td>Mon - Thu:</td>
              <td>8am - 9pm</td>
            </tr>
            <tr>
              <td>Fri - Sat:</td>
              <td>8am - 1am</td>
            </tr>
            <tr>
              <td>Sunday:</td>
              <td>9am - 10pm</td>
            </tr> */}
          </tbody>
        </table>
      </div>
      {/*Grid column*/}
    </div>
    {/*Grid row*/}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div className="text-center p-1" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    
    <p>© 2020 Copyright:Eccha-Nir</p>
  </div>
  {/* Copyright */}
</div>


        
  </div>



 
    
    



  )
}

export default Footer