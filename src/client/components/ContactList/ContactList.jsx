import React from 'react';
import { connect } from 'react-redux';
import contactsActions from '../../../redux/contacts-actions'
import PropTypes from 'prop-types'
import ContactsListItem from '../ContactListItem'





function ContactList({contacts, onDeleteContacts}) {
  const contactElements = contacts.map(({ id, ...props }) => (
      <ContactsListItem key={id}  {...props} onClick={()=> onDeleteContacts(id)}
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
    if (!filter) {
      return allContacts
    }

    return allContacts.filter(({name}) => name.toLowerCase().includes(normalizedFilter));
  };

const mapStateToProps = ({ contacts: { items, filter}}) => ({
  contacts: getVisibleContacts(items, filter)
})

const mapDispatchToProps = dispatch => ({
  onDeleteContacts: (id) => dispatch (contactsActions.deleteContacts(id))
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
    onDeleteContacts: PropTypes.func.isRequired,
  };
  
