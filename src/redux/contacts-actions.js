import { v4 as uuidv4 } from 'uuid';
import types from './contacts-types';

const addContacts = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: uuidv4(),
    name,
    number,
  },
});

const deleteContacts = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const filter = value => ({
  type: types.FILTER,
  payload: value,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default { addContacts, deleteContacts, filter };
