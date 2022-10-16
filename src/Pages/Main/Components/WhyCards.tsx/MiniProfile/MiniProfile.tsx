import React from 'react';
import styles from './MiniProfile.module.css' 
import profile from '../../../../../assets/components/miniProfile/profile.png'

const MiniProfile = () => {
    return (
        <div className={styles.container}>
            <div>
                <img src={profile} alt="" />
            </div>
            <div className={styles.info}>
                <div className={styles.info_title}>Doctors Ltd.</div>
                <div className={styles.info_text}>2 Days Ago 44 read</div>
            </div>
        </div>
    );
};

export default MiniProfile;