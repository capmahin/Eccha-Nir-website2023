import React from 'react'
import {  FaLinkedin,FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import {AiFillHome} from 'react-icons/ai'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    
  <div className="bg-success text-center text-dark ">
   
  <div className=" text-center text-lg-start" >
  {/* Grid container */}
  <div className="container p-1">
    {/*Grid row*/}
    <div className="row mt-3">
      {/*Grid column*/}
      <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-4">About company</h5>
        <p>
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
          voluptatum deleniti atque corrupti.
        </p>
        <p>
          Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
          molestias.
        </p>
        <div className="mt-1 text-dark">
          {/* Facebook */}
          <a type="button" className="btn btn-outline-light btn-floating btn-lg m-1"><FaLinkedin/></a>
          {/* Dribbble */}
          <a type="button" className="btn btn-outline-light btn-floating btn-lg m-1"><FaFacebook/></a>
          {/* Twitter */}
          <a type="button" className="btn btn-outline-light btn-floating btn-lg m-1"><FaInstagram /></a>
          {/* Google + */}
          <a type="button" className="btn btn-outline-light btn-floating btn-lg m-1"><FaWhatsapp /></a>
          <a type="button" className="btn btn-outline-light btn-floating btn-lg m-1"><HiOutlineMail /></a>
          {/* Linkedin */}
        </div>
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-4 pb-1">Search something</h5>
        <div className="form-outline form-white mb-4">
          <input type="text" id="formControlLg" className="form-control form-control-lg" />
          <label className="form-label" htmlFor="formControlLg" style={{marginLeft: 0}}>Search</label>
          <div className="form-notch"><div className="form-notch-leading" style={{width: 9}} /><div className="form-notch-middle" style={{width: '48.8px'}} /><div className="form-notch-trailing" /></div></div>
       
      </div>
      {/*Grid column*/}
      {/*Grid column*/}
      <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
        <h5 className="text-uppercase mb-4">Opening hours</h5>
        <table className="table text-center text-dark">
          <tbody className="font-weight-normal">
            <tr>
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
            </tr>
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