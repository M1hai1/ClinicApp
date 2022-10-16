import React from 'react';
import styles from './DownloadButton.module.css'

type button = {
    image?: string,
    text: string
}


const DownloadButton = (props: button) => {
    return (
        <button className={styles.download}>
        <div className={styles.download_text}>
          {props.text}
        </div>
        <div className={styles.download_image}>
          <img src={props.image} alt="" />
        </div>
      </button>
    );
};

export default DownloadButton;