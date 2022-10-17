import React from 'react';
import styles from './Map.module.css'

const Map = () => {
    return (

        <div className={styles.map_container}>
            <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.7440755961356!2d46.02119308625018!3d51.536253720030224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4114c7c7b98510c7%3A0x90ead9b3ed93cd40!2z0JzQuNGA!5e0!3m2!1sru!2sru!4v1665959064945!5m2!1sru!2sru"/>
        </div>
    );
};

export default Map;