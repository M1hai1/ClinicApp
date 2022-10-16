import React from 'react';
import { useAppSelector } from '../../redux/hooks/hooks';
import styles from './Mail.module.css'

const Mail = () => {
    const {theme} = useAppSelector(state => state.themeReducer)

    return (
        <div className={theme ? styles.dark_container : styles.light_container}>
            <div className='container'> 
                <div className={styles.mail_container}>
                    <div className="mail_info">
                        <div className={styles.info_title}>Я не против получать E-mail рассылку</div>
                        <div className={styles.info_tеxt}>
                            И узнавать первым о новых специалистах,
                            о наших акциях и нововведениях</div>
                    </div>
                    <form className={styles.mail_form}>
                        <input className={styles.mail_input}/>
                        <button className={styles.mail_button}>Подписаться</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Mail;