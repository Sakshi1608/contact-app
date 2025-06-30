import React from 'react';
import CardContact from './ContactCard';

const ContactList = (props) => {
    const contacts = Array.isArray(props.contacts) ? props.contacts : [];

    const deleteContactHandler = (id) => {
        props.getContactid(id);
    };

    const renderContactList = contacts.map((contact) => (
        <CardContact
            contact={contact}
            clickHandler={deleteContactHandler}
            key={contact.id}
        />
    ));

    return (
        <div className="ui celled list">
            {renderContactList.length > 0 ? renderContactList : <div>No contacts available.</div>}
        </div>
    );
};

export default ContactList;
