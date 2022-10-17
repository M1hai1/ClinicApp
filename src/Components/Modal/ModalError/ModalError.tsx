import React from 'react';
import styles from './ModalError.module.css'
import error from '../../../assets/components/Modal/error.png'

const ModalError = () => {



    return (
        <div className='message'>
            <div className={styles.modalError}>
                Не удалось загрузить данные
            </div>
        </div>
    );
};

export default ModalError;