import React from 'react';

import img1 from '../../../../../assets/components/About/Tell/img1.png'
import { useAppSelector } from '../../../../../redux/hooks/hooks';
import styles from './Profile.module.css' 

type props = {
    image: string
}

const Profile = (props: props) => {
    const {theme} = useAppSelector(state => state.themeReducer)

    return (
        <div className={theme ? styles.dark_container : styles.light_container}>
            <div className={styles.inner_profile}>
            <img src={props.image} alt="" />
            <div className={styles.profile_info}>
                <div className={styles.profile_title}>Дмитрий</div>
                <div className={styles.profile_subtitle}>Менеджер</div>
                <div className="profile_text">
                    «МедОК Онлайн – отличный сервис для людей, которые ценят свое время.
                    Чтобы попасть к врачу в поликлинику, нужно не менее 3 часов с учетом дороги.
                    Зачастую работа не отпускает тебя и решение проблем откладывается, в итоге – подорванное здоровье со всеми вытекающими.
                    В то же время, видеоконсультация с профессионалом требует от меня всего 15 минут, а врач подскажет, как справиться с болезнью до того, как она справилась со мной. Спасибо, что вы есть!»
                </div>
            </div>
        </div>

    </div>

    );
};

export default Profile;