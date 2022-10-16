import React from 'react';
import styles from './AboutCard.module.css'

type props = {
    image: string
}


const AboutCard = (props: props) => {
    return (
        <div className={styles.card_container}>
            <img src={props.image} alt="" width={400}/>
            <div className={styles.card_text}>
            Приложение для пациентов позволяет легко понять,
            какой специалист нужен пользователю, и дает много инструментов для
            полноценного общения – текстовые сообщения, аудио- и видеосвязь высокого
            качества, обмен файлами, формы для заполнения по итогам консультации и
            длительное хранение истории консультаций. Возможна оплата наличными или страховым полисом,
            обслуживание в рамках медпрограммы.
            </div>
        </div>
    );
};

export default AboutCard;