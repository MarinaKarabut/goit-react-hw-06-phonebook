import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../../redux/contacts-actions'
import PropTypes from 'prop-types'
import ContactsListItem from '../ContactListItem'



function ContactList({contacts, onDeleteContact}) {
  const contactElements = contacts.map(({ id, ...props }, idx) => (
      <ContactsListItem key={id}  {...props} onClick={()=> onDeleteContact(idx)}
      />
    ))
        
    return (
        <ul>
            {contactElements}
        </ul>
    )
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(({ name }) => name.toLowerCase().includes(normalizedFilter));
  
  };

const mapStateToProps = ({ contacts: { items, filter } }) => ({
    contacts: getVisibleContacts(items, filter)
})



const mapDispatchToProps = dispatch => ({
  onDeleteContact: (idx) => dispatch (contactsActions.deleteContact(idx))
}) 


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }).isRequired,
    ),
    onDeleteContact: PropTypes.func.isRequired,
  };
  
