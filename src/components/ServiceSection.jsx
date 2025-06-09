import React, { useEffect, useState } from 'react';
import API from '../api';

const ServiceSection = ({ type }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    API.get(`/${type}`).then(res => setServices(res.data));
  }, [type]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold capitalize">{type} Services</h1>
      {services.map(service => (
        <div key={service.id} className="mb-4">
          <h2 className="text-xl">{service.title}</h2>
          <p>{service.description}</p>
          <img src={service.imageUrl} alt={service.title} style={{ width: '200px' }} />
        </div>
      ))}
    </div>
  );
};

export default ServiceSection;
