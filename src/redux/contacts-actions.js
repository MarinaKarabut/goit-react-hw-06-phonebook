import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', (name, number) => ({
  payload: {
    id: uuidv4(),
    name,
    number,
  },
}));

const deleteContact = createAction('contacts/delete');

const filter = createAction('contacts/filter');

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContact, deleteContact, filter };
