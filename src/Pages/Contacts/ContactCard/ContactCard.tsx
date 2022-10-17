import React from 'react';
import { useAppSelector } from '../../../redux/hooks/hooks';
import styles from './ContactCard.module.css'


type props = {
    title: string,
    image: string
}

const ContactCard = (props: props) => {
    const {theme} = useAppSelector(state => state.themeReducer)

    return (
        <div className={theme ? styles.dark_container : styles.light_container}>
            <div className={styles.card_body}>
                <div className={styles.card_image}>
                    <img src={props.image} alt="" />
                </div>
                <div className={styles.card_title}>
                    {props.title}
                </div>
            </div>
        </div>
    );
};

export default ContactCard;