import React from 'react';
import styles from './Card.module.css'

type props = {
    image: string,
    title: string,
    subtitle: string
}

const Card = ({title, subtitle, image}: props) => {
   
    return (
        <div className={styles.card}>
            <div className={styles.card_image}>
                <img src={(image)} alt="search" />
            </div>
            <div className={styles.card_title}>{title}</div>
            <div className={styles.card_subtile}>{subtitle}</div>
      </div>
    );
};

export default Card;