import React from 'react'
import Layout from "../components/Layout/Layout"
import Banner1 from '../assists/Image/Banner1.png'
import Banner2 from '../assists/Image/Banner2.png'
import Banner3 from '../assists/Image/Banner3.png'
import Banner4 from '../assists/Image/Banner4.png'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const About = () => {
  return (
    <Layout>
       <div className="row contactus ">
        <div className="col-md-6 ">
        <div id="carouselExampleFade" className="carousel slide carousel-fade p-4"
  data-bs-ride="true"

>
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
        <div className="col-md-4">
          <h6 className="text-justify mt-2">
          A niche will help your online shirt selling business stand out and better attract the right target audience without blowing your budget.

You hear the term “niche” tossed around a lot, but it’s important to choose one when trying to understand how to make an online t-shirt business. One of the most important parts of a successful online t-shirt business model is the ability to stand out, and one of the best ways to do that is by catering to a specific target audience or interest group.

Generally, categories like “t-shirts for people who like funny slogans” are going to be too broad to get noticed in a very developed market. You’re going to want to tighten it up a little more. An example of a more specific niche would be t-shirts with funny slogans that relate to doctors and nurses, or to dog owners, as pictured below.
The next step of how to start an online t-shirt business is to find suppliers. Not all t-shirts are the same and not all print jobs are the same. As we mentioned above, quality is paramount to your brand and its success, so it’s important to educate yourself and choose your blank shirts wisely.


          </h6>
          <h1 className="bg-success p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            any query and info about product feel free to call anytime we 24X7
            available

          </p>
          <p className="mt-3">
            <BiMailSend /> : www.ecchenir.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 01303-347695
          </p>
          
        </div>
      </div>
    </Layout>
  )
}

export default About