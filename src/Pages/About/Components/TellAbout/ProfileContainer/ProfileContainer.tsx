import React from 'react';
import Profile from '../Profiles/Profile';
import styles from './ProfileContainer.module.css'
import {Link, Routes, Route} from 'react-router-dom'

import img1 from '../../../../../assets/components/About/Tell/img1.png'
import img2 from '../../../../../assets/components/About/Tell/img2.png'
import img3 from '../../../../../assets/components/About/Tell/img3.png'
import { useAppSelector } from '../../../../../redux/hooks/hooks';


const ProfileContainer = () => {
    const {theme} = useAppSelector(state => state.themeReducer)

    return (
        <div className={theme ? styles.dark_container : styles.light_container}>
            <div className='tell_container'>
            <div className="container">
                <div className={styles.tell_inner}>
                    <h2 className={styles.inner_title}>Что о нас говорят</h2>
                </div>
                <Routes>
                    <Route path='/james' element={<Profile image={img1}/>}/>
                    <Route path='/ann' element={<Profile image={img2}/>}/>
                    <Route path='/andrew' element={<Profile image={img3}/>}/>
                    
                </Routes>
            </div>
            <nav className={styles.nav}>
                <Link className={styles.profileLink} to='/about/james'>James</Link>
                <Link className={styles.profileLink} to='/about/ann'>Ann</Link>
                <Link className={styles.profileLink} to='/about/andrew'>Andrew</Link>
            </nav>
        </div>
    </div>

    );
};

export default ProfileContainer;