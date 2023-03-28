import React from 'react';
import Banner1 from '../../assists/Image/Banner1.png'
import Banner2 from '../../assists/Image/Banner2.png'
import Banner3 from '../../assists/Image/Banner3.png'
import Banner4 from '../../assists/Image/Banner4.png'

const Banner = () => {
  return (
    <div><div id="carouselExampleFade" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Banner1}  className="d-block w-100" height={"300px"} alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Banner2} className="d-block w-100" height={"300px"} alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Banner3} className="d-block w-100" height={"300px"} alt="..." />
    </div>
    <div className="carousel-item">
      <img src={Banner4} className="d-block w-100" height={"300px"} alt="..." />
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