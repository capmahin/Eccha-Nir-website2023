import React from 'react'
import { NavLink } from 'react-router-dom';

const AdminMenu = () => {
  return (
    <>
    <div className="text-center ">
    <div className="list-group ">
  <h2>Admin Panel</h2>
  <NavLink to="/dashboard/admin/create-category" className="list-group-item list-group-item-action bg-success">Create Category</NavLink>
  <NavLink to="/dashboard/admin/create-product" className="list-group-item list-group-item-action bg-success">Create Product</NavLink>
  <NavLink to="/dashboard/admin/create-banner" className="list-group-item list-group-item-action bg-success">Create Banner</NavLink>
  <NavLink to="/dashboard/admin/banners" className="list-group-item list-group-item-action bg-success">Banners</NavLink>
  <NavLink to="/dashboard/admin/products" className="list-group-item list-group-item-action bg-success">Products</NavLink>
  <NavLink to="/dashboard/admin/orders" className="list-group-item list-group-item-action bg-success">Orders</NavLink>
  <NavLink to="/dashboard/admin/users" className="list-group-item list-group-item-action bg-success">Users</NavLink>
  
</div>
    </div>
    


    </>
  )
}

export default AdminMenu