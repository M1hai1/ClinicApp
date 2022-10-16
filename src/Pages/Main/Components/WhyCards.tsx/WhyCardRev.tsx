import React from 'react';
import MiniProfile from './MiniProfile/MiniProfile';
import styles from './WhyCardRev.module.css'
import image from '../../../../assets/components/whyCard/image.png'


type card = {
    title: string,
    text: string,
}

const WhyCardRev = ({title, text}:card) => {
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

export default WhyCardRev;