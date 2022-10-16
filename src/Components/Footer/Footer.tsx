import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer_container}>
        <div className='container'>
            <div className={styles.container}>
                <nav className={styles.column}>
                    <a href="" className={styles.titleLink}>Ссылки</a>
                    <a href="" className={styles.link}>О проекте</a>
                    <a href="" className={styles.link}>Приложение</a>
                    <a href="" className={styles.link}>Наши врачи</a>
                </nav>
                <nav className={styles.column}>
                    <a href="" className={styles.titleLink}>Как использовать?</a>
                    <a href="" className={styles.link}>О проекте</a>
                    <a href="" className={styles.link}>Приложение</a>
                    <a href="" className={styles.link}>Наши врачи</a>
                </nav>
                <nav className={styles.column}>
                    <a href="" className={styles.titleLink}>Поддержка</a>
                    <a href="" className={styles.link}>О проекте</a>
                    <a href="" className={styles.link}>Приложение</a>
                    <a href="" className={styles.link}>Наши врачи</a>
                </nav>
                <nav className={styles.column}>
                    <a href="" className={styles.titleLink}>Контакты</a>
                    <a href="" className={styles.link}>Консультация</a>
                    <a href="" className={styles.link}>8 800 350 6175</a>
                    <a href="" className={styles.link}>info@mismedok.ru</a>
                </nav>
            </div>
        </div>
        </div>
    );
};

export default Footer;