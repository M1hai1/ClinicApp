import android from '../../../../assets/components/UI/button/android.svg'
import apple from '../../../../assets/components/UI/button/apple.svg'
import phone from '../../../../assets/components/media/phone.png'

import styles from './Media.module.css'
import DownloadButton from '../../../../UI/DownloadButton/DownloadButton';
import { useAppSelector } from '../../../../redux/hooks/hooks';

type text = {
  text: string
}

const Media = (props: text) => {
  const {theme} = useAppSelector(state => state.themeReducer)

    return (
      <div className={theme ? styles.dark_container : styles.light_container}>
        <div className='container'>
          <div className={styles.media}>
            <div className="media_info">
              <div className={styles.media_text}>
                Скачайте приложение «МедОК Онлайн», и команда профессионалов всегда сможет
                позаботиться о Вашем здоровье.
              </div>
              <div className={styles.media_buttons}>
                <DownloadButton text='Android' image={android}/>
                <DownloadButton text='IOS' image={apple}/>
              </div>
            </div>
            <div className="media_image">
              <img src={phone} alt="" />
            </div>
          </div>
          </div>
        </div>
    );
};

export default Media;