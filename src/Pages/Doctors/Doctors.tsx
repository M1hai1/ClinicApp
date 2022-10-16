import React from 'react';
import CardContainer from '../../Components/CardContainer/CardContainer';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import Title from '../../Components/Title/Title';
import AboutIntro from '../About/Components/AboutIntro/AboutIntro';

import {doctorsCards} from '../../data/DoctorsCards'
import AboutContainer from '../About/Components/AboutInfo/AboutContainer/AboutContainer';

const Doctors = () => {
    return (
        <div>
            <SectionTitle title='Приглашаем врачей к сотрудничеству'/>
            <AboutIntro/>
            <Title title='Что такое телемедицина?' subtitle='Используйте наше мобильное приложение, находясь дома, на работе, в дороге – получите срочную консультацию врача или сэкономьте средства на стоимости приема'/>
            <CardContainer array={doctorsCards}/>
            <section className="gradient">
                <AboutContainer/>
            </section>
        </div>
    );
};

export default Doctors;