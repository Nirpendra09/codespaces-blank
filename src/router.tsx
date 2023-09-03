// src/Router.tsx

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Contacts from './components/Contacts';
import ContactForm from './components/Contacts/ContactForm';
import CovidMap from './components/Map';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Contacts />} />
      <Route path="/add-contact" element={<ContactForm />} />
      <Route path="/edit-contact/:id" element={<ContactForm />} />
      <Route path="/map" element={<CovidMap />} />
    </Routes>
  );
};

export default Router;
