import React from 'react';
import { useAppSelector } from '../../../../redux/hooks/hooks';
import Button from '../../../../UI/Button/Button';
import styles from './Form.module.css'

const Form = () => {
    const {theme} = useAppSelector(state => state.themeReducer)

    return (
        <div className={theme ? styles.container_dark : styles.container_light}>
            <div className={styles.form_container}>
                <div className={styles.form_title}>Если есть вопросы</div>
                <input type="text" className={theme ? styles.form_name_dark : styles.form_name}/>
                <input type="text" className={theme ? styles.form_email_dark : styles.form_email} />
                <input type="text" className={theme ? styles.form_text_dark : styles.form_text} />
                <Button text='Отправить'/>
            </div>
        </div>
    );
};

export default Form;