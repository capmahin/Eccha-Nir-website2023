import React, { useState, useEffect } from "react";
import Banner from "../components/Layout/Banner";
import Layout from "../components/Layout/Layout"
import { useAuth } from "../context/auth" 
import axios from "axios";
import { Checkbox, Radio } from "antd";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    // getTotal();
  }, []);

  //get products
  const getAllProducts = async () =>{
    try {
      const {data} = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(()=>{
    getAllProducts();
  })
  return (
    <Layout>
      <Banner/>
       <div className="row mt-3">
        <div className="col-md-3">
          <h6>Search By Category</h6>
          <div className="d-flex flex-column">
          {
            categories?.map((c)=>(
              <Checkbox key={c._id} onChange={(e)=> console.log(e)}>
                {c.name}
              </Checkbox>
            ))
          }
          </div>
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap">
          {products?.map((p) => (
             
                <div className="card m-2" style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    height={"150px"}
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">Name: {p.name}</h5>
                    
                    <p className="card-text">Description: {p.description}</p>
                    <p className="card-text">Quantity: {p.quantity}</p>
                    <p className="card-text">Price: {p.price}Taka</p>
                    <button class="btn btn-success ms-1">More Details</button>
                  <button class="btn btn-secondary ms-1">ADD TO CART</button>
                  </div>
                </div>
              
            ))}
          </div>
        </div>
       </div>
    </Layout>
  )
}

export default HomePage