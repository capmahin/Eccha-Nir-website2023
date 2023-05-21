import React, { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Banner = () => {
  const [products, setProducts] = useState([]);
  const getAllProducts = async () => {
    try {
        const { data } = await axios.get("/api/v1/banner/get-banner");
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
     
      <div id="carouselExampleFade" className="carousel slide carousel-fade"
  data-bs-ride="true"

>
  <div className="carousel-inner">
  {products?.map((p) => (
    <div className="carousel-item active">
    
         
        <img src={`/api/v1/banner/banner-photo/${p._id}`}  className="d-block w-100" height={"400px"} alt="..." />
        
             </div>
             ))}
           
        

      
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

</div>
  )
}

export default Banner