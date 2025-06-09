import React from 'react';
import ServiceSection from '../components/ServiceSection';

const FoodPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold p-4">Food Services</h1>
      <ServiceSection type="food" />
    </div>
  );
};

export default FoodPage;
