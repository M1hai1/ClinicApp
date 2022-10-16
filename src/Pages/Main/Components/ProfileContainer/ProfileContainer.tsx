import React from 'react';
import styles from './ProfileContainer.module.css'
import { profiles } from '../ProfileCard/profiles';
import ProfileCard from '../ProfileCard/ProfileCard';
import { useAppSelector } from '../../../../redux/hooks/hooks';

const ProfileContainer = () => {
  const {theme} = useAppSelector(state => state.themeReducer)

    return (
      <div className={theme ? styles.container_dark : styles.container_light}>
        <div className='container'>
          <div className={styles.card_container}>
              {profiles.map(profile =>
                <ProfileCard
                  title={profile.name}
                  proffession={profile.proffession}
                  text={profile.subscription}
                  time={profile.time}
                />  
              )}
          </div>
      </div>
    </div>
    );
};

export default ProfileContainer;