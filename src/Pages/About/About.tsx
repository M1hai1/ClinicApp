import React from 'react';
import CardContainer from '../../Components/CardContainer/CardContainer';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import AboutIntro from './Components/AboutIntro/AboutIntro';

import img1 from '../../assets/components/About/Tell/img1.png'
import img2 from '../../assets/components/About/Tell/img2.png'
import img3 from '../../assets/components/About/Tell/img3.png'
import Profile from './Components/TellAbout/Profiles/Profile';
import ProfileContainer from './Components/TellAbout/ProfileContainer/ProfileContainer';
import Title from '../../Components/Title/Title';
import WhyCardContainer from '../Main/Components/WhyCards.tsx/WhyCardContainer/WhyCardContainer';
import AboutContainer from './Components/AboutInfo/AboutContainer/AboutContainer';

import { aboutCards } from '../../data/AboutCards';

const About = () => {



    return (
        <div>
            <SectionTitle title='О проекте'/>
            <AboutIntro/>
            <CardContainer array={aboutCards}/>
            <ProfileContainer/>
            <section className='gradient'>
                <Title title='Какие формы принял проект «МедОК Онлайн»?' subtitle='Мобильное приложение «МедОК пациентам» и мобильное приложение «МедОК врачам» - две половинки одного сервиса. Но возможности телемедицинских консультаций этим не исчерпываются. Для Вас мы предлагаем следующие продукты:'/>
                <AboutContainer/>
            </section>
        </div>
    );
};

export default About;