import React, { useState, useEffect} from "react";
import Banner from "../components/Layout/Banner";
import Layout from "../components/Layout/Layout"
import { Prices } from "../components/Prices"; 
import axios from "axios";
import { Checkbox, Radio, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import "../styles/Homepage.css";
import { AiOutlineReload } from "react-icons/ai"
import LatestProduct from "./LatestProduct";
import ShowCategories from "./ShowCategories";
import Expolre from "./Expolre";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import address from "../assists/HomePG/address.png"
import contact from "../assists/HomePG/contact.png"
import { BiMailSend, BiPhoneCall } from "react-icons/bi";



const HomePage = () => {
  const navigate = useNavigate();
 
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  // Buy Now
  const [visible, setVisible] = useState(false);

  
  

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
    getTotal();
  }, []);

  // //get products
  // const getAllProducts = async () =>{
  //   try {
  //     const {data} = await axios.get("/api/v1/product/get-product");
  //     setProducts(data.products);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // };

  // useEffect(()=>{
  //   getAllProducts();
  // });



    // filter by cat
    // const handleFilter = (value, id) => {
    //   let all = [...checked];
    //   if (value) {
    //     all.push(id);
    //   } else {
    //     all = all.filter((c) => c !== id);
    //   }
    //   setChecked(all);
    // };
    // useEffect(() => {
    //   if (!checked.length || !radio.length) getAllProducts();
    // }, [checked.length, radio.length]);
  
    // useEffect(() => {
    //   if (checked.length || radio.length) filterProduct();
    // }, [checked, radio]);

     //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  //order

 

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length || !radio.length) getAllProducts();
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Banner/>
       <div className="container-fluid row mt-3 home-page">
       <h2 className="p-2 text-center show">!! Ecche Nir Products !!</h2>
        <div className="col-md-4 p-4 filters">
        {/* Filter Start ??? */}
          {/* <h5 className="text-center text-success p-2 ">Address</h5> */}
          <div className="d-flex flex-column mt-5 ">
          <div className="card" style={{width: '18rem'}}>
          <img src={address} className="card-img-top" alt="..." height={"50px"} />
          <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          </div>
          </div> 
           {/* price filter */}
           {/* <h5 className="text-center text-success mt-4">Contact</h5>  */}
          <div className="d-flex flex-column mt-4 ">
          <div className="card " style={{width: '18rem'}}>
          <img src={contact} className="card-img-top" alt="..." height={"50px"} />
          <div className="card-body">
          <p className="text-justify mt-1 p-1">
            any query and info about product feel free to call anytime we 24X7
            available

          </p>
          <p className="mt-1">
            <BiMailSend /> : www.ecchenir.com
          </p>
          <p className="mt-1">
            <BiPhoneCall /> : 01303-347695
          </p>
           </div>
            </div>
          </div>
          {/* <div className="d-flex flex-column">
            <button
              className="btn btn-success mt-1"
              onClick={() => window.location.reload()}
            >
              RESET 
            </button>
          </div> */}

        {/* Filter End ????? */}
        </div>
        <div className="col-md-8">
          
          <div className="d-flex flex-wrap">
          {products?.map((p) => (
             
                <div className="card m-2" key={p._id} style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    height={"150px"}
                    alt={p.name}
                    onClick={() => navigate(`/product/${p.slug}`)}
                  />
                  <div className="card-body">
                    <div className="card-name-price"><h5 className="card-title">Name: {p.name}</h5>
                    <p className="card-title card-price">Price: {p.price}Taka</p>
                  
                    </div>
                    {/* <div className="d-flex">
                    <button className="btn btn-success ms-1"  onClick={()=>navigate("/CreateOrder")} >Buy Now</button>
                    
                   <button className="btn btn-secondary ms-1"
                    onClick={() => {
                      setCart([...cart, p]);
                      localStorage.setItem(
                        "cart",
                        JSON.stringify([...cart, p])
                      );
                      toast.success("Item Added to cart");
                    }} >Add to cart</button>
                    </div> */}
                    
                    {/* <p className="card-text">Description: {p.description}</p>
                    <p className="card-text">Quantity: {p.quantity}</p> */}
                    
                    

                  </div>
                </div>
              
            ))}
          </div>
           <div className="m-2 p-3">
            {products && products.length < total && (
              <button
                className="btn loadmore"
                onClick={(e) => {
                  e.preventDefault();
                  setPage(page + 1);
                }}
              >
                 {loading ? (
                  "Loading ..."
                ) : (
                  <>
                    {" "}
                    Loadmore <AiOutlineReload />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
       </div>
       <LatestProduct/>
       <ShowCategories/>
       {/* Explore Start */}
       {/* <Expolre/> */}

       {/* Expolore End */}
    </Layout>
  )
}

export default HomePage