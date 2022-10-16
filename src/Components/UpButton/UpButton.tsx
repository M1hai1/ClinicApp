import React, { useEffect, useState } from 'react';
import styles from './UpButton.module.css'


const UpButton = () => {

    const [sticky, setSticky] = useState(false)

    useEffect(() => {
      window.addEventListener('scroll', () => 
        window.scrollY > 450 ? setSticky(true) : setSticky(false)
      );
  });
  

    return (
        <button
            onClick={() => window.scrollTo(0, 0)}
            className={sticky ? styles.button : styles.none}>
            Up
        </button>
    );
};

export default UpButton;