import React from 'react';
import ServiceSection from '../components/ServiceSection';

const ComputerPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold p-4">Computer Repair & Reseller Services</h1>
      <ServiceSection type="computer" />
    </div>
  );
};

export default ComputerPage;
