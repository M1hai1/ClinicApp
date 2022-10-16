import React from 'react';
import { useAppSelector } from '../../redux/hooks/hooks';
import styles from './SectionTitle.module.css'

type props = {
    title: string
}

const SectionTitle = (props: props) => {
    const {theme} = useAppSelector(state => state.themeReducer)

    return (
        <div className={theme ? styles.dark_container : styles.light_container}>
            <h2 className={styles.sectionTitle}>
                {props.title}
            </h2>
        </div>
    );
};

export default SectionTitle;