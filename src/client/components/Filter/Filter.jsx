import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { v4 as uuidv4 } from 'uuid';
import contactsActions from '../../../redux/contacts-actions'

import styles from './Filter.module.css'


function Filter({ value, onChange }) {
  const id = uuidv4();
    return (
        <label htmlFor={id}>
          Finds contacts by name <input
          className = {styles.input} 
          type="text"
          value = {value}
          onChange={onChange}
          id={id}
          />
      
        </label>
    )
};

const mapStateToProps = (state) => ({
  value: state.contacts.filter
  
})

const mapDispatchToProps = dispatch =>({
  onChange: (e) => dispatch(contactsActions.filter(e.target.value))
})


export default connect(mapStateToProps, mapDispatchToProps)(Filter);


Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
