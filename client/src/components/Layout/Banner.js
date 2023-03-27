import React from 'react';
import ecchaNir from '../../assists/Image/Eccha-nir.jpg'

const Banner = () => {
  return (
    <div><div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={ecchaNir}  className="d-block w-100" height={"300px"} alt="..." />
    </div>
    <div className="carousel-item">
      <img src={ecchaNir} className="d-block w-100" height={"300px"} alt="..." />
    </div>
    <div className="carousel-item">
      <img src={ecchaNir} className="d-block w-100" height={"300px"} alt="..." />
    </div>
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