import React from 'react';
import CardContainer from '../../Components/CardContainer/CardContainer';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Mail from '../../Components/Mail/Mail';
import Title from '../../Components/Title/Title';
import DownloadApp from './Components/DownloadApp/DownloadApp';
import Form from './Components/Form/Form';
import Intro from './Components/Intro/Intro';
import Media from './Components/Media/Media';
import ProfileContainer from './Components/ProfileContainer/ProfileContainer';
import WhyCardContainer from './Components/WhyCards.tsx/WhyCardContainer/WhyCardContainer';

import { mainCards } from '../../data/MainCards';
import UpButton from '../../Components/UpButton/UpButton';

const Main = () => {
    return (
        <div>
    <section className="main gradient">
        <Intro/>
      </section>
          <Title title={'Что такое телемедицина?'} subtitle={'Используйте наше мобильное приложение, находясь дома, на работе, в дороге – получите срочную консультацию врача или сэкономьте средства на стоимости приема'}/>
          <CardContainer array={mainCards}/>
      <section className='gradient'>
        <Media text='#fff'/>
      </section>
          <Title title={'Познакомьтесь с нашими специалистами'} subtitle={'Скачайте приложение «МедОК Онлайн», и они будут на связи, чтобы помочь Вам именно тогда, когда это важно'}/>
          <ProfileContainer/>
      <section className='gradient'>
          <Title title='Для чего использовать приложение “МедОК”' subtitle='Скачайте приложение «МедОК Онлайн», и они будут на связи, чтобы помочь Вам именно тогда, когда это важно'/>
          <WhyCardContainer/>
      </section>
          <DownloadApp text='Скачайте приложение «МедОК Онлайн», и команда профессионалов всегда сможет позаботиться о Вашем здоровье.'/>
          <Form/>
        </div>
    );
};

export default Main;