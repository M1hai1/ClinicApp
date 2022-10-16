import React from 'react';
import styles from './DownloadApp.module.css'
import app from '../../../../assets/components/downloadApp/app.png'
import Button from '../../../../UI/Button/Button';
import { useAppSelector } from '../../../../redux/hooks/hooks';

type props = {
    text: string
}

const DownloadApp = (props: props) => {
  const {theme} = useAppSelector(state => state.themeReducer)

    return (
      <div className={theme ? styles.dark_container : styles.light_container}>
        <div className='container'>
          <div className={styles.media}>
            <div className="media_info">
              <div className={styles.media_text} style={{color: props.text}}>
                Скачайте приложение «МедОК Онлайн», и команда профессионалов всегда сможет
                позаботиться о Вашем здоровье.
              </div>
              <div className={styles.media_buttons}>
                <Button text='Скачать'/>
              </div>
            </div>
            <div className="media_image">
              <img src={app} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
};

export default DownloadApp;