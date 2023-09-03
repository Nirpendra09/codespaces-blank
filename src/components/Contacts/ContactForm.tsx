// src/features/contacts/ContactForm.tsx

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { addContact, editContact } from '../../redux/contactsSlice';

const ContactForm: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contacts = useSelector((state: RootState) => state.contacts.contacts);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone } = formData;

    if (id) {
      // Edit contact
      const contactId = parseInt(id, 10);
      const editedContact = { id: contactId, name, email, phone };
      dispatch(editContact(editedContact));
    } else {
      // Add new contact
      const newContact = {
        id: contacts.length + 1, // You should generate a unique ID here.
        name,
        email,
        phone,
      };
      dispatch(addContact(newContact));
    }

    navigate('/');
  };

  useEffect(() => {
    if (id) {
      const contactId = parseInt(id, 10);
      const contact = contacts.find((contact: {
        id: number;
        name: string;
        email: string;
        phone: string;
      }) => contact.id === contactId);
      console.log(contact);
      if (contact) {
        setFormData({ name: contact.name, email: contact.email, phone: contact.phone });
      }
    }
  }, [])

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">{id ? 'Edit Contact' : 'Add Contact'}</h1>
      <form onSubmit={handleSubmit}>

        <div className="mb-4 relative">
          <label htmlFor="name" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John Doe"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Email:
          </label>
          <div className="relative">
            <input
              type="email"
              id='email'
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@gmail.com"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-left mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Phone:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="555-555-5555"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          {id ? 'Update' : 'Add'}
        </button>
        <Link to="/" className="text-blue-500 ml-2 hover:underline">
          Cancel
        </Link>
      </form>
    </div>
  );
};

export default ContactForm;
