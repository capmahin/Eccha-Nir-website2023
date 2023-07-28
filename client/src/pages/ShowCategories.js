import React from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";

const ShowCategories = () => {
  const categories = useCategory();
  return (
      
      <div className="p-2 ">
        <h3 className=" p-1 show">""All Categories""</h3>
        <div className="row container">
          {categories.map((c) => (
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={c._id}>
              <div className="card">
                <Link to={`/category/${c.slug}`} className="btn catt-btn">
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default ShowCategories;