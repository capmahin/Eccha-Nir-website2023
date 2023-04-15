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
      const { data } = await axios.get("/api/v1/product/get-product");
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
         <h3 className="text-success p-2">""Latest Product""</h3>
    <div className="d-flex flex-wrap home-page">
    {products?.splice(0,4).map((p) => (
             
             <div className="card m-2" key={p._id} style={{ width: "18rem" }}>
               <img
                 src={`/api/v1/product/product-photo/${p._id}`}
                 className="card-img-top"
                 height={"150px"}
                 alt={p.name}
               />
               <div className="card-body">
                 <div className="card-name-price"><h5 className="card-title">Name: {p.name}</h5>
                 <p className="card-text">Price: {p.price}Taka</p>
                 </div>
                 
                 {/* <p className="card-text">Description: {p.description}</p>
                 <p className="card-text">Quantity: {p.quantity}</p> */}
                 
                 <div>
                <button className="btn btn-success ms-1" onClick={() => navigate(`/product/${p.slug}`)}>More Details</button>
                
               </div>

               </div>
             </div>
           
         ))}
          </div>
    </div>
  )
}

export default LatestProduct