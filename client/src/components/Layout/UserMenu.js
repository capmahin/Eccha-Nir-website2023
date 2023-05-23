import React from 'react'
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  return (
    <>
    <div className="text-center ">
    <div className="list-group ">
  
  <NavLink to="/dashboard/user/orderShow" className="list-group-item list-group-item-action bg-success">OrderShow</NavLink> 
 
  
  
</div>
    </div>
    


    </>
  )
}

export default UserMenu