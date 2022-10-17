import React from 'react';
import CardContainer from '../../Components/CardContainer/CardContainer';
import Map from '../../Components/Map/Map';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import ContactsCardContainer from './ContactsCardsContainer/ContactsCardContainer';

const Contacts = () => {
    return (
        <div>
            <SectionTitle title='Контакты'/>
            <ContactsCardContainer/>
            <div>
                <Map/>
            </div>
        </div>
    );
};

export default Contacts;