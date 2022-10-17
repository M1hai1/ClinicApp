import React from 'react';
import { useAppSelector } from '../../../redux/hooks/hooks';
import ContactCard from '../ContactCard/ContactCard';
import styles from './ContactsCardContainer.module.css'

import gmail from '../../../assets/components/Contacts/Cards/gmail.png'
import telegram from '../../../assets/components/Contacts/Cards/telegram.png'
import phone from '../../../assets/components/Contacts/Cards/phone.png'


const ContactsCardContainer = () => {
    const {theme} = useAppSelector(state => state.themeReducer)


    return (
        <div className={theme ? styles.dark_container : styles.light_container}>
            <div className='container'>
                <div className={styles.card_container}>
                    <ContactCard image = {gmail} title='Telegram'/>
                    <ContactCard image = {telegram} title='Telegram'/>
                    <ContactCard image = {phone} title='Telegram'/>
                </div>
            </div>
        </div>
    );
};

export default ContactsCardContainer;