import React, { Component } from 'react';

import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';


import styles from './Phonebook.module.css';

class Phonebook extends Component {

  render() {
    return (
      <div className={styles.box}>
        <h1 className={styles.tittle}>Phonebook</h1>
        <ContactForm />
        <h2 className={styles.tittle}>Contacts</h2>
        <Filter/>
        <ContactList />
      </div>
    );
  }
}

export default Phonebook;
