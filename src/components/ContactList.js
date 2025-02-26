import React from 'react';
import CardContact from './ContactCard';

const ContactList = (props) => {
    const deleteContactHandler = (id) =>{
        props.getContactid(id);
    };

    
    const renderContactList = props.contacts.map((contact) =>{
        return(
           <CardContact contact={contact} clickHandler={deleteContactHandler}></CardContact>
        )
    })
    return (
        <div className="ui celled list">
            {renderContactList}
        </div>
    );
}
export default ContactList;