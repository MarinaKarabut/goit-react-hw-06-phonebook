import React, { Component } from 'react';
import { connect } from 'react-redux'
import contactsActions from '../../../redux/contacts-actions'

import FormField from '../../../shared/components/FormField'
import Button from '../../../shared/components/Button'


import {fields} from "./fields";



import {initialState} from "./initialState"

class ContactForm extends  Component {
    state ={...initialState}

    handleChange = ({target}) => {
        const {name, value} = target
        this.setState({[name]: value})
    }
        
    handleSubmit = (e)=>{
        e.preventDefault()
        this.props.onSubmit(this.state)
        this.reset()
    }

    reset = () => {
        this.setState({...initialState})
    }

    render(){
        const {name, number} = this.state;
        const {handleChange, handleSubmit} =this;
        
        return (
            <form  onSubmit={handleSubmit}>
                <FormField {...fields.username} value={name} onChange={handleChange} />
                <FormField {...fields.phone} value={number} onChange={handleChange} />
                <Button type="submit">Add contact</Button>
          </form>
        )
    }
};

const mapStateToProps = (state) => ({
    contacts: state.contacts.items
    
})



const mapDispatchToProps = (dispatch) => ({
    onSubmit: (name, number)=> dispatch(contactsActions.addContacts(name, number))
})




export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

