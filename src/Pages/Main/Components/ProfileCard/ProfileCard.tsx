import React from 'react';
import styles from './ProfileCard.module.css'
import profile from '../../../../assets/components/profileCard/profile.png'

type card = {
    title: string,
    text: string,
    time: string,
    proffession: string,
}


const ProfileCard = (props: card) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_image}>
                <img src={profile} alt="" />
            </div>
            <div className={styles.card_title}>{props.title}</div>
            <div className={styles.card_proffession}>{props.proffession}</div>
            <div className={styles.card_text}>{props.text}</div>
            <div className={styles.card_time}>{props.time}</div>
            <a className={styles.card_button}>View Profile</a>
        </div>
    );
};

export default ProfileCard;