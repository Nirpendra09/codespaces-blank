// src/features/contacts/contactsSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Contact {
  id: number;
  name: string;
  email: string;
  phone: string;
}

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@doe.com',
      phone: '555-555-5555',
    },
    {
      id: 2,
      name: 'Karen Williams',
      email: 'karen@williams.com',
      phone: '444-444-4444',
    },
    {
      id: 3,
      name: 'Alice Smith',
      email: 'alice@smith.com',
      phone: '333-333-3333',
    },
    {
      id: 4,
      name: 'Bob Johnson',
      email: 'bob@johnson.com',
      phone: '222-222-2222',
    },
    {
      id: 5,
      name: 'Emma Davis',
      email: 'emma@davis.com',
      phone: '111-111-1111',
    },
    {
      id: 6,
      name: 'Michael Brown',
      email: 'michael@brown.com',
      phone: '666-666-6666',
    },
    {
      id: 7,
      name: 'Sophia Wilson',
      email: 'sophia@wilson.com',
      phone: '777-777-7777',
    },
    {
      id: 8,
      name: 'Daniel Lee',
      email: 'daniel@lee.com',
      phone: '888-888-8888',
    },
    {
      id: 9,
      name: 'Olivia Martinez',
      email: 'olivia@martinez.com',
      phone: '999-999-9999',
    },
    {
      id: 10,
      name: 'William Johnson',
      email: 'william@johnson.com',
      phone: '123-456-7890',
    },
    // Add more contacts as needed
  ],
  
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    editContact: (state, action: PayloadAction<Contact>) => {
      const index = state.contacts.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.contacts[index] = action.payload;
      }
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter((c) => c.id !== action.payload);
    },
  },
});

export const { addContact, editContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
