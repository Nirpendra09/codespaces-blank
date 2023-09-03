import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store';
import { deleteContact } from '../../redux/contactsSlice';
import { useNavigate } from 'react-router-dom';


const Contacts: React.FC = () => {
  const contacts = useSelector((state: RootState) => state.contacts.contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onDelete = (id: number) => {
    dispatch(deleteContact(id));
  };

  return (
    <div className='h-screen overflow-scroll pb-[100px]'>
      <div className='max-w-screen-xl mt-8 mx-auto flex items-center justify-center gap-8 flex-wrap'>
        {contacts.map((contact: any) => (
          <div
            className="flex flex-col bg-blue-100 shadow-lg rounded-lg p-5 mx-4 max-w-md md:max-w-2xl"
            key={contact.id}
          >
            <div className='flex gap-8 '>
              <Link className='font-sm' to={`/edit-contact/${contact.id}`}>Edit</Link>
              <button
                onClick={() => onDelete(contact.id)} // Pass the contact.id to onDelete
                className='font-sm'
              >
                Delete
              </button>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold text-gray-900 -mt-1">{contact.name}</p>
            </div>
            <p className="text-left text-gray-700">{contact.email}</p>
            <p className="text-left text-gray-700 text-sm">
              {contact.phone}
            </p>
          </div>
        ))}
      </div>


      <button
        onClick={() => navigate('/add-contact')}
        className="mt-8 group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
        <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
        <span className="relative text-black group-hover:text-white">Add contact</span>
      </button>
    </div>
  );
};

export default Contacts;