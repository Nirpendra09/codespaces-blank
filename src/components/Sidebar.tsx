import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom if using React Router

const Sidebar = () => {
  return (
    <nav className="bg-gray-200 p-6 h-screen">
      <div className="p-4">
        {/* Sidebar Content */}
        <ul>
          <li>
            <Link to="/">Contacts</Link>
          </li>
          <li>
            <Link to="/chats">Charts</Link>
          </li>
          <li>
            <Link to="/map">Map</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
