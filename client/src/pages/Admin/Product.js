import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Product = () => {
  return (
    <Layout>
        <div className="row">
            <div className="col-md-3">
                <AdminMenu/>
            </div>
        </div>
    </Layout>
  )
}

export default Product