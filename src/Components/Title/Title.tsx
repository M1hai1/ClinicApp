import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks/hooks';
import {themeSlice} from '../../redux/reducers/themeSlice';
import styles from './Title.module.css'

type Title = {
    title: string,
    subtitle: string,
}


const Title = (props: Title) => {

    const {theme} = useAppSelector(state => state.themeReducer)
    const {toggleTheme} = themeSlice.actions
    const dispatch = useAppDispatch()

    return (
        <div className={theme ? styles.dark_title : styles.light_title}>
            <div className="container">
                <div className={styles.main_title}>
                    <div className={styles.title_title}>{props.title}</div>
                    <div className={styles.title_subtitle}>{props.subtitle}</div>
                </div>
            </div>
        </div>
    );
};

export default Title;