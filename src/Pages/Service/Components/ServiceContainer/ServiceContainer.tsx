import React from 'react';
import Loader from '../../../../Components/Loader/Loader';
import ModalError from '../../../../Components/Modal/ModalError/ModalError';
import ModalSuccess from '../../../../Components/Modal/ModalSuccess/ModalSuccess';
import { useAppSelector } from '../../../../redux/hooks/hooks';
import { userAPI } from '../../../../redux/server/UserService';
import ProfileCard from '../../../Main/Components/ProfileCard/ProfileCard';
import styles from './ServiceContainer.module.css'



const ServiceContainer = () => {
    const {theme} = useAppSelector(state => state.themeReducer)

    const {data: users, isLoading, isError} = userAPI.useFetchAllUsersQuery(9)

    return (
        <div className={theme ? styles.container_dark : styles.container_light}>
            <div className='container'>
            <div className={styles.card_container}>
                {isLoading && <Loader/>}
                {isError && <ModalError/>}
                {users && users.map(user =>
                <> 
                    <ProfileCard
                        proffession={user.proffession}
                        time={user.time}
                        title={user.name}
                        text={user.subscription}
                    />
                    <ModalSuccess/>
                </>
                )}
            </div>
            </div>
        </div>
    );
};

export default ServiceContainer;