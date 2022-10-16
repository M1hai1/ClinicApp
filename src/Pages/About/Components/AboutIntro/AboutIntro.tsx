import React from 'react';
import styles from './AboutIntro.module.css'

import image from '../../../../assets/components/About/Intro/image.png'
import play from '../../../../assets/components/About/Intro/play.png'
import { useAppSelector } from '../../../../redux/hooks/hooks';


const AboutIntro = () => {
    const {theme} = useAppSelector(state => state.themeReducer)

    return (
        <div className={theme ? styles.container_dark : styles.container_light}>
            <div className='about_intro'>
            <div className="container">
                <div className={styles.intro_inner}>
                <div className={styles.intro_info}>
                    <h4 className={styles.intro_name}>МедОК</h4>
                    <h2 className={styles.intro_title}>Продукты, меняющие систему здравоохранения</h2>
                    <div className={styles.intro_text}>
                        Наша компания с партнерами производит IT-продукты, нацеленные на развитие рынка медицинских услуг в России.
                        Быстрее, выгоднее, удобнее, прозрачнее, полезнее – при этом мы ориентируемся на всех участников рынка – от потребителей,
                        до владельцев ЛПУ и врачей.
                    </div>
                    <button className={styles.intro_button}>
                        <img src={play} alt="" width={70}/>
                        <div className={theme ? styles.button_text_dark : styles.button_text_light}>Смотреть видео</div>
                    </button>
                </div>
                <div className="intro_image">
                    <img src={image} alt="woman"/>
                </div>
            </div>
            </div>
        </div>
    </div>
    );
};

export default AboutIntro;