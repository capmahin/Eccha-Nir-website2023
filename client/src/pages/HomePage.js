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
        </div>
        <div className="col-md-9">
          <h1 className="text-center">All Products</h1>
          <div className="d-flex flex-wrap">
            <h1>products</h1>
          </div>
        </div>
       </div>
    </Layout>
  )
}

export default HomePage