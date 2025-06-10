import React from 'react';
import Slider from 'react-slick';

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

 const slides = [
  {
    img: '/images/1img.jpg',
    title: 'E-Sevai',
    desc: 'Aadhar Download, Address Correction, PVC Card Order',
  },
  {
    img: '/images/download.jpg',
    title: 'Computer Services',
    desc: 'Laptop repair, OS install, and more',
  },
  {
    img: '/images/Windows-Laptop.jpg',
    title: 'Food Services',
    desc: 'Healthy homemade meals at your doorstep',
  },
];


  return (
    <div className="container-fluid p-0 pb-5">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx} className="position-relative">
            <img src={slide.img} className="img-fluid w-100" alt={slide.title} />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
              style={{ background: 'rgba(53, 53, 53, 0.5)' }}>
              <div className="container text-white text-center">
                <h5 className="text-uppercase mb-3">Welcome To GoBI</h5>
                <h1 className="display-5 mb-3">{slide.title}</h1>
                <p className="fs-5">{slide.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
