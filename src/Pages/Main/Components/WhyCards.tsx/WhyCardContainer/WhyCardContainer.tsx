import React from 'react';
import WhyCard from '../WhyCard';
import WhyCardRev from '../WhyCardRev';
import styles from './WhyCardContainer.module.css'

const WhyCardContainer = () => {
    return (
        <div className='container'>
            <div className={styles.whyCard_container}>
                <WhyCard title={'Узнайте, нужен ли Вам очный прием?'} text={'Возможно, с Вашей проблемой можно разобраться без поездки в клинику? Экономьте время и финансы!'}/>
                <WhyCardRev title={'Узнайте, нужен ли Вам очный прием?'} text={'Возможно, с Вашей проблемой можно разобраться без поездки в клинику? Экономьте время и финансы!'}/>
                <WhyCard title={'Узнайте, нужен ли Вам очный прием?'} text={'Возможно, с Вашей проблемой можно разобраться без поездки в клинику? Экономьте время и финансы!'}/>
            </div>
      </div>
    );
};

export default WhyCardContainer;