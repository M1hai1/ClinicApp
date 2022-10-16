import React from 'react';
import AboutCard from '../AboutCard/AboutCard';
import AboutCardRev from '../AboutCard/AboutCardRev';
import styles from './AboutContainer.module.css'

import img1 from '../../../../../assets/components/About/Info/img1.jpg'
import img2 from '../../../../../assets/components/About/Info/img2.jpg'

const AboutContainer = () => {
    return (
        <div className='container'>
            <div className={styles.container}>
                <AboutCard image={img1}/>
                <AboutCardRev image={img2}/>
                <AboutCard image={img1}/>
                <AboutCardRev image={img2}/>
            </div>
        </div>
    );
};

export default AboutContainer;