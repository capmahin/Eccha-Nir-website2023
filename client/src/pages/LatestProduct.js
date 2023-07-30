import React, { useState, useEffect } from "react";
import Banner1 from '../assists/Image/Banner1.png'
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import "../styles/Homepage.css";
import { useNavigate } from "react-router-dom";

const LatestProduct = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);

    //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/latestproduct/get-latestproduct");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Something Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);
  return (
    <div>
         <h3 className="show p-2 text-center">""Latest Product""</h3>

    {/* Carusol Start */}
          
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  
    
    
    <div className="carousel-inner">
       
    <div className="carousel-item active">     
    <div className="d-flex flex-wrap home-page m-3 p-3">   
    {products?.map((p) => (
      
            
              
             <div className="card m-2" key={p._id} style={{ width: "18rem" }}>
               <img
                 src={`/api/v1/latestproduct/latestproduct-photo/${p._id}`}
                 className="card-img-top"
                 height={"150px"}
                 alt={p.name}
                 onClick={() => navigate(`/latestproduct/${p.slug}`)}
               />
               <div className="card-body">
                 <div className="card-name-price"><h5 className="card-title">Name: {p.name}</h5>
                 <p className="card-title card-price">Price: {p.price}Taka</p>
                 </div>
                 
                 {/* <p className="card-text">Description: {p.description}</p>
                 <p className="card-text">Quantity: {p.quantity}</p> */}
                 
                 <div>
                {/* <button className="btn btn-success ms-1" >More Details</button> */}
                
               </div>

               </div>
             </div>
             
            
         ))}
         </div>
          </div>
             
             </div>
  
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


    {/* Carusol End */}



    

          
    </div>
  )
}

export default LatestProduct