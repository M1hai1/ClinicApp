import React from 'react';
import styles from './Button.module.css'

type props = {
    text: string
}

const Button = (props: props) => {
    return (
        <button className={styles.button}>
            {props.text}
        </button>
    );
};

export default Button;