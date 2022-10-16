import React from 'react';
import styles from './WhyCard.module.css'
import image from '../../../../assets/components/whyCard/image.png'
import MiniProfile from './MiniProfile/MiniProfile';

type card = {
    title: string,
    text: string,
}




const WhyCard = ({title, text}:card) => {
    return (
        <div className={styles.card_container}>
            <div className={styles.card_info}>
                <div className={styles.card_title}>{title}</div>
                <div className={styles.card_text}>{text}</div>
                <MiniProfile/>
            </div>
            <div className={styles.card_image}>
                <img src={image} alt="" />
            </div>
        </div>
    );
};

export default WhyCard;