import React from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import ProfileContainer from '../Main/Components/ProfileContainer/ProfileContainer';
import ServiceContainer from './Components/ServiceContainer/ServiceContainer';

const Service = () => {

    return (
        <div>
            <SectionTitle title='Сервис'/>
            <ServiceContainer/>            
        </div>
    );
};

export default Service;