import React from 'react';
import men from '../../../../assets/components/main/men.png'

import styles from './Intro.module.css'


const Intro = () => {
    return (
        <div className="container">
          <div className={styles.main_inner}>
            <div className={styles.intro_info}>
              <div className={styles.intro_title}>Те же врачи, новый уровень сервиса</div>
              <div className={styles.intro_subtitle}>Оперативная помощь врача<br/> - это надежда на будущее</div>
              <button className={styles.main_button}>О нас</button>
            </div>
            <div className={styles.main_img}>
              <img src={men} alt="men"/>
            </div>
          </div>
        </div>

    );
};

export default Intro;