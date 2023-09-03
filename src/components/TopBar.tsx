import React from 'react';
import { useLocation } from 'react-router-dom';

const TopBar = () => {
  const location = useLocation();
  const routeName = (location.pathname === '/'  || location.pathname.includes("contact"))? 'Contacts' : location.pathname.replace('/', '');

  return (
    <div className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto">{routeName}</div>
    </div>
  );
};

export default TopBar;
